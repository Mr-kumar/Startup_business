import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, date, time, pageTitle } =
      await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Admin email template
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Request - ${pageTitle}`,
      html: `
        <h2>${pageTitle}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    // User confirmation email
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your Consultation Details - ${pageTitle}`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #4F46E5; color: #fff; padding: 20px; text-align: center;">
      <h2 style="margin: 0;">${pageTitle}</h2>
    </div>
    <div style="padding: 20px; color: #333;">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for showing interest in our services. Here are your consultation details:</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Service</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Date</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Time</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${time}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">🔗 Please join your consultation session using the link below:</p>
      <p style="text-align: center; margin: 20px 0;">
        <a href="${process.env.GOOGLE_MEET_LINK}" target="_blank" 
           style="background-color: #4F46E5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
          Join Google Meet
        </a>
      </p>
      <p>If you have any questions, feel free to reply to this email.</p>
      <p>Best regards,<br><strong>Your Company Name</strong></p>
    </div>
  </div>
  `,
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
