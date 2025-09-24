import React from "react";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, state, query, adminOnly } = await request.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // ---------- Admin Email ----------
    const adminMail = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `📌 New Support Query from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Query Received</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px;font-weight:bold;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">State:</td><td>${state}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Query:</td><td>${query}</td></tr>
          </table>
        </div>
      `,
    };

    // ---------- User Confirmation Email ----------
    const userMail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "✅ We received your support request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
          <div style="background:#1D293D; color:#fff; padding:20px; text-align:center;">
            <h2 style="margin:0;">Support Request Received</h2>
          </div>
          <div style="padding:20px; color:#333;">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for contacting us. Our support team has received your query and will get back to you soon.</p>
            <h3>Your Query:</h3>
            <p style="background:#f9f9f9; padding:10px; border-radius:5px;">${query}</p>
            <p style="margin-top:20px;">Best regards,<br/>Support Team</p>
          </div>
        </div>
      `,
    };

    // Send admin email always
    await transporter.sendMail(adminMail);

    // If adminOnly is truthy, skip user confirmation
    if (!adminOnly) {
      await transporter.sendMail(userMail);
    }

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
