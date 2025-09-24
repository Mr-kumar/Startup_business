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
import path from "path";
import { google } from "googleapis";

const verifiedEmails = new Set<string>();
export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      state,
      date, // expected format: "YYYY-MM-DD"
      time, // expected format: "HH:mm" (24h)
      pageTitle,
      durationMinutes, // optional, number
      isEmailVerified
    } = await request.json();

    if (!isEmailVerified || !verifiedEmails.has(email)) {
      return NextResponse.json(
        { error: "Email verification required" },
        { status: 400 }
      );
    }

    verifiedEmails.delete(email);

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
        (e) => e && typeof e.entryPointType === "string" && e.entryPointType === "video"
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
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header with gradient + Logo -->
    <div style="background: linear-gradient(135deg, #1D293D 0%, #2D3E5D 100%); color: #fff; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between;">
      <!-- Left side (title) -->
      <div>
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">${pageTitle}</h2>
        <p style="margin: 6px 0 0; opacity: 0.9; font-size: 14px;">DoStartup Consultation Confirmation</p>
      </div>
      
      <!-- Right side (logo) -->
      <div>
        <img src="cid:logo" alt="DoStartup Logo" width="48" height="48" style="border-radius: 6px;" />
      </div>
    </div>
      
      <!-- Main content -->
      <div style="padding: 32px; color: #333; background: #ffffff;">
        <p style="margin: 0 0 24px; color: #666; line-height: 1.6;">
          Dear <strong style="color: #1D293D;">${name}</strong>,
        </p>
        
        <p style="margin: 0 0 28px; color: #666; line-height: 1.6;">
          Thank you for choosing DoStartup! We're excited to help you with your entrepreneurial journey. 
          Below are the details for your upcoming consultation:
        </p>
        
        <!-- Details card -->
        <div style="background: #f9fafc; border-radius: 10px; padding: 24px; margin-bottom: 28px; border-left: 4px solid #7DD756;">
          <h3 style="color: #1D293D; margin-top: 0; margin-bottom: 20px; font-size: 18px; font-weight: 600;">
            📋 Consultation Details
          </h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; width: 40%; color: #5a6575; font-weight: 500;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">State/UT</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${state}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Date</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #5a6575; font-weight: 500;">Time</td>
              <td style="padding: 10px 0; color: #1D293D;">${time}</td>
            </tr>
          </table>
        </div>
        
        <!-- Meeting link section -->
        <div style="text-align: center; margin-bottom: 32px;">
          <p style="color: #666; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
              <path d="M15 10L21 7V17L15 14M15 10V14M15 10L9 7L3 10V14L9 17L15 14M4 16L9 19L15 16" stroke="#7DD756" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#7DD756" stroke-width="2"/>
            </svg>
            Join your consultation using the link below:
          </p>
          
          ${meetLink
          ? `<a href="${meetLink}" target="_blank" style="background: linear-gradient(135deg, #7DD756 0%, #68B84C 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600; display: inline-block; box-shadow: 0 4px 8px rgba(125, 215, 86, 0.2);">
                  Join Google Meet
                </a>`
          : `<div style="background: #f8f9fa; padding: 14px; border-radius: 6px; display: inline-block;">
                  <span style="color: #8c8c8c;">(Meeting link will be provided soon)</span>
                </div>`
        }
          
          <p style="color: #888; font-size: 13px; margin-top: 16px;">
            Please join 5 minutes before your scheduled time.
          </p>
        </div>
        
        <!-- Additional information -->
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <h4 style="color: #1D293D; margin-top: 0; margin-bottom: 12px; font-size: 15px; display: flex; align-items: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1D293D" stroke-width="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="#1D293D" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Important Notes
          </h4>
          <ul style="color: #5a6575; font-size: 14px; margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 6px;">Please have your questions prepared to make the most of our time</li>
            <li style="margin-bottom: 6px;">Test your audio and video beforehand</li>
            <li>If you need to reschedule, please reply to this email at least 24 hours in advance</li>
          </ul>
        </div>
        
        <p style="color: #666; line-height: 1.6; margin-bottom: 28px;">
          We look forward to helping you with your startup journey! If you have any questions before our meeting, 
          feel free to reply to this email.
        </p>
        
        <p style="margin: 0; color: #666;">
          Best regards,<br>
          <strong style="color: #1D293D;">The DoStartup Team</strong>
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background: #f5f7fb; padding: 20px; text-align: center; border-top: 1px solid #e8e8e8;">
        <p style="margin: 0; font-size: 12px; color: #8c8c8c;">
          © ${new Date().getFullYear()} DoStartup. All rights reserved.<br>
          <a href="#" style="color: #1D293D; text-decoration: none; margin: 0 8px;">Privacy Policy</a> • 
          <a href="#" style="color: #1D293D; text-decoration: none; margin: 0 8px;">Terms of Service</a>
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

export async function PUT(request: Request) {
  try {
    const { email } = await request.json();
    verifiedEmails.add(email);
    return NextResponse.json({ message: "Email marked as verified" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to mark email as verified" }, { status: 500 });
  }
}
