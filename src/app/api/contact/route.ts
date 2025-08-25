// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, state, date, time, pageTitle } =
//       await request.json();

//     // Create a transporter using SMTP
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // Admin email template
//     // Admin email template
//     const mailOptions = {
//       from: process.env.SMTP_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: `📌 New Consultation Request - ${pageTitle}`,
//       html: `
//     <div style="font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; border-radius: 10px;">
//       <h2 style="color: #2c3e50; margin-bottom: 10px;">${pageTitle}</h2>
//       <p style="font-size: 16px; margin-bottom: 20px;">
//         A new consultation request has been submitted. Here are the details:
//       </p>
      
//       <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
//         <tr>
//           <td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td>
//           <td style="padding: 8px;">${name}</td>
//         </tr>
//         <tr style="background-color: #f1f1f1;">
//           <td style="padding: 8px; font-weight: bold;">Email:</td>
//           <td style="padding: 8px;">${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; font-weight: bold;">Phone:</td>
//           <td style="padding: 8px;">${phone}</td>
//         </tr>
//         <tr style="background-color: #f1f1f1;">
//           <td style="padding: 8px; font-weight: bold;">State/Union Territory:</td>
//           <td style="padding: 8px;">${state}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; font-weight: bold;">Date:</td>
//           <td style="padding: 8px;">${date}</td>
//         </tr>
//         <tr style="background-color: #f1f1f1;">
//           <td style="padding: 8px; font-weight: bold;">Time:</td>
//           <td style="padding: 8px;">${time}</td>
//         </tr>
//       </table>

//       <p style="font-size: 14px; color: #666; margin-top: 20px;">
//         This is an automated notification. Please follow up with the client at the scheduled time.
//       </p>
//     </div>
//   `,
//     };

//     // User confirmation email
//     const userMailOptions = {
//       from: process.env.SMTP_USER,
//       to: email,
//       subject: `Your Consultation Details - ${pageTitle}`,
//       html: `
//   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
//     <div style="background-color: #1D293D; color: #fff; padding: 20px; text-align: center;">
//       <h2 style="margin: 0;">${pageTitle}</h2>
//     </div>
//     <div style="padding: 20px; color: #333;">
//       <p>Dear <strong>${name}</strong>,</p>
//       <p>Thank you for showing interest in our services. Here are your consultation details:</p>
//       <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>State/Union Territory</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${state}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>Date</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${date}</td>
//         </tr>
//         <tr>
//           <td style="padding: 8px; border: 1px solid #ddd;"><strong>Time</strong></td>
//           <td style="padding: 8px; border: 1px solid #ddd;">${time}</td>
//         </tr>
//       </table>
//       <p style="margin-top: 20px;">🔗 Please join your consultation session using the link below:</p>
//       <p style="text-align: center; margin: 20px 0;">
//         <a href="${process.env.GOOGLE_MEET_LINK}" target="_blank" 
//            style="background-color: #7DD756; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
//           Join Google Meet
//         </a>
//       </p>
//       <p>If you have any questions, feel free to reply to this email.</p>
//       <p>Best regards,<br><strong>DoStartup</strong></p>
//     </div>
//   </div>
//   `,
//     };

//     // Send emails
//     await transporter.sendMail(mailOptions);
//     await transporter.sendMail(userMailOptions);

//     return NextResponse.json(
//       { message: "Email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }








// app/api/create-meet/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(request:Request) {
  try {
    const {
      name,
      email,
      phone,
      state,
      date, // expected format: "YYYY-MM-DD"
      time, // expected format: "HH:mm" (24h)
      pageTitle,
      durationMinutes // optional, number
    } = await request.json();

    // ---------- Build start/end datetimes ----------
    // We'll parse as local time and fallback to 30 minutes if duration not supplied.
    const duration = Number(durationMinutes) || 30;
    // Create Date objects: "YYYY-MM-DDTHH:mm:00"
    const startDt = new Date(`${date}T${time}:00`);
    const endDt = new Date(startDt.getTime() + duration * 60_000);

    // Use RFC3339 strings (ISO). We also pass timeZone to Calendar API below.
    const startISO = startDt.toISOString();
    const endISO = endDt.toISOString();
    const timeZone = process.env.TIMEZONE || "Asia/Kolkata";

    // ---------- Setup Google OAuth2 client (owner account) ----------
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );
    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    // ---------- Create Calendar event with conference data (Meet) ----------
    const eventResource = {
      summary: `Consultation: ${pageTitle} — ${name}`,
      description: `Consultation requested by ${name} (${email})\nPhone: ${phone}\nState: ${state}`,
      start: {
        dateTime: startISO,
        timeZone,
      },
      end: {
        dateTime: endISO,
        timeZone,
      },
      attendees: [
        { email }, // the user will be added as attendee (won't auto-send invites below)
      ],
      conferenceData: {
        createRequest: {
          requestId: `req-${Date.now()}`, // unique per request
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    // Insert event: conferenceDataVersion=1 is required to create the Meet link.
    const insertRes = await calendar.events.insert({
      calendarId: process.env.OWNER_CALENDAR_ID || "primary",
      requestBody: eventResource,
      conferenceDataVersion: 1,
      sendUpdates: "none", // we control emails separately
    });

    const returnedEvent = insertRes.data;

    // ---------- Extract Meet link ----------
    let meetLink = null;
    if (returnedEvent.conferenceData && returnedEvent.conferenceData.entryPoints) {
      const videoEntry = returnedEvent.conferenceData.entryPoints.find(
        (e) => e.entryPointType === "video"
      );
      meetLink = videoEntry?.uri || null;
    }
    // Fallback fields
    if (!meetLink) meetLink = returnedEvent.hangoutLink || returnedEvent.htmlLink || null;

    // If we still don't have a meet link, continue gracefully but note it.
    if (!meetLink) {
      console.warn("Calendar event created but no Meet link returned.", returnedEvent);
    }

    // ---------- Create transporter using SMTP ----------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // ---------- Admin email (same as your template, but include Meet link) ----------
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `📌 New Consultation Request - ${pageTitle}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; border-radius: 10px;">
        <h2 style="color: #2c3e50; margin-bottom: 10px;">${pageTitle}</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">
          A new consultation request has been submitted. Here are the details:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
          <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">State/Union Territory:</td><td style="padding: 8px;">${state}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Date:</td><td style="padding: 8px;">${date}</td></tr>
          <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">Time:</td><td style="padding: 8px;">${time}</td></tr>
        </table>
        <p style="font-size: 14px; color: #666; margin-top: 20px;">
          ${meetLink ? `Meet Link: <a href="${meetLink}" target="_blank">${meetLink}</a>` : "No Meet link generated."}
        </p>
        <p style="font-size: 14px; color: #666; margin-top: 20px;">
          This is an automated notification. Please follow up with the client at the scheduled time.
        </p>
      </div>
    `,
    };

    // ---------- User confirmation email (inject meetLink instead of env var) ----------
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your Consultation Details - ${pageTitle}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #1D293D; color: #fff; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">${pageTitle}</h2>
      </div>
      <div style="padding: 20px; color: #333;">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for showing interest in our services. Here are your consultation details:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>State/Union Territory</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${state}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Date</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${date}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Time</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${time}</td></tr>
        </table>
        <p style="margin-top: 20px;">🔗 Please join your consultation session using the link below:</p>
        <p style="text-align: center; margin: 20px 0;">
          ${
            meetLink
              ? `<a href="${meetLink}" target="_blank" style="background-color: #7DD756; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Join Google Meet</a>`
              : `<span style="color:#888;">(No Meet link generated)</span>`
          }
        </p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Best regards,<br><strong>DoStartup</strong></p>
      </div>
    </div>
    `,
    };

    // ---------- Send emails ----------
    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(userMailOptions)]);

    // Return success and the meet link (if any)
    return NextResponse.json(
      { message: "Email(s) sent successfully", meetLink, eventId: returnedEvent.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email / creating event:", error);
    return NextResponse.json({ error: "Failed to send email or create Meet" }, { status: 500 });
  }
}
