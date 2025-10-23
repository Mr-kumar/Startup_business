import { NextResponse } from "next/server";
import { sendOTPEmail } from "@/lib/mail";

// TODO: Replace with persistent storage (Redis/database)
// Current in-memory storage is volatile and will be lost on server restart
const otpStorage = new Map<string, { otp: string; expires: number; attempts: number }>();

// Clean expired OTPs every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [email, data] of otpStorage) {
    if (data.expires < now) {
      otpStorage.delete(email);
    }
  }
}, 5 * 60 * 1000);

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if too many attempts (rate limiting)
    const existingData = otpStorage.get(email);
    if (existingData && existingData.attempts >= 3 && existingData.expires > Date.now()) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    const otp = generateOTP();
    const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Store OTP
    otpStorage.set(email, { otp, expires, attempts: 0 });

    // Send OTP using centralized email service
    await sendOTPEmail(email, otp);

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}

// Verify OTP endpoint
export async function PUT(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const storedData = otpStorage.get(email);

    if (!storedData) {
      return NextResponse.json(
        { error: "OTP not found or expired" },
        { status: 400 }
      );
    }

    if (storedData.expires < Date.now()) {
      otpStorage.delete(email);
      return NextResponse.json(
        { error: "OTP has expired" },
        { status: 400 }
      );
    }

    // Increment attempts
    storedData.attempts++;

    if (storedData.otp !== otp) {
      if (storedData.attempts >= 3) {
        return NextResponse.json(
          { error: "Too many incorrect attempts. Please request a new OTP." },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: `Invalid OTP. ${3 - storedData.attempts} attempts remaining.` },
        { status: 400 }
      );
    }

    // OTP is valid - remove from storage
    otpStorage.delete(email);

    return NextResponse.json(
      { message: "Email verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
