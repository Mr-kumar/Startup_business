import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, pageTitle } = await request.json();

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

    // Email template
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL, // The email where you want to receive notifications
      subject: `New Consultation Request - ${pageTitle}`,
      html: `
        <h2>${pageTitle}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Service:</strong> ${service}</p>
      `,
    };

    // Also send confirmation email to the user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Thank you for your interest in ${pageTitle}`,
      html: `
        <h2>${pageTitle}</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest. Our team will contact you shortly regarding your consultation request.</p>
        <p>Your details:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Phone: ${phone}</li>
          <li>Email: ${email}</li>
          <li>Selected Service: ${service}</li>
        </ul>
        <p>Best regards,</p>
        <p>Your Company Name</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
