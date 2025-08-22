import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory storage for OTPs (use Redis in production)
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

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // OTP email template
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Verify Your Email - DoStartup Consultation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1D293D; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Email Verification</h2>
          </div>
          <div style="padding: 30px; color: #333; text-align: center;">
            <h3 style="color: #1D293D; margin-bottom: 20px;">Verify Your Email Address</h3>
            <p style="margin-bottom: 30px; color: #666;">
              Please use the following OTP to verify your email address and complete your consultation booking:
            </p>
            <div style="background-color: #f8f9fa; border: 2px dashed #7DD756; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h1 style="font-size: 36px; font-weight: bold; color: #1D293D; margin: 0; letter-spacing: 8px;">${otp}</h1>
            </div>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              This OTP will expire in <strong>10 minutes</strong>. Please do not share this code with anyone.
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              If you didn't request this verification, please ignore this email.
            </p>
            <p style="margin-top: 30px;">Best regards,<br><strong>DoStartup Team</strong></p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

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
