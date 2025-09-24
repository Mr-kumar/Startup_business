  import { NextResponse } from "next/server";
  import nodemailer from "nodemailer";
  import path from "path";
  // import NewL from "../../../assets/NewL.png";

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
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

      <!-- Header with logo -->
      <div style="background: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #f0f0f0;">
        <img src="cid:logo" alt="DoStartup Logo" style="height: 48px;" />
      </div>

      <!-- Main content -->
      <div style="padding: 36px; color: #333; background: #ffffff;">
        <h2 style="margin: 0 0 20px; font-size: 22px; font-weight: 600; text-align: center; color: #1D293D;">
          Verify Your Email Address
        </h2>

        <p style="margin-bottom: 20px; color: #666; line-height: 1.6; text-align: center;">
          Thank you for booking a consultation with DoStartup. To complete your registration, please use the following One-Time Password:
        </p>

        <!-- OTP Section -->
        <div style="background: #f9fcf8; border: 1px solid #e4f2dd; border-radius: 10px; padding: 24px; margin: 28px 0; text-align: center;">
          <div style="background: #7DD756; color: white; display: inline-block; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">
            VERIFICATION CODE
          </div>
          <h1 style="font-size: 42px; font-weight: 700; color: #1D293D; margin: 10px 0; letter-spacing: 6px; font-family: 'Courier New', monospace;">
            ${otp}
          </h1>
        </div>

        <!-- Info -->
        <p style="color: #5a6575; font-size: 14px; text-align: center; margin: 0;">
          This OTP will expire in <strong style="color: #1D293D;">10 minutes</strong>. 
          For security reasons, please do not share this code.
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #f5f7fb; padding: 20px; text-align: center; border-top: 1px solid #e8e8e8;">
        <p style="margin: 0 0 12px; color: #5a6575; font-size: 14px;">Best regards,</p>
        <p style="margin: 0; color: #1D293D; font-weight: 600; font-size: 15px;">The DoStartup Team</p>
        <p style="margin: 20px 0 0; font-size: 12px; color: #8c8c8c;">
          © ${new Date().getFullYear()} DoStartup. All rights reserved.
        </p>
      </div>
    </div>
    `,
        attachments: [
          {
            filename: "NewL.png",
            path: path.join(process.cwd(), "public", "NewL.jpg"), // absolute path to file
            cid: "logo" // same as used in the img src
          }
        ]
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
