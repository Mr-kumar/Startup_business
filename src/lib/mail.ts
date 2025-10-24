import nodemailer from 'nodemailer';

// Create a single transporter instance
let transporter: nodemailer.Transporter;

// Initialize transporter on first use
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    } as nodemailer.TransportOptions);
  }
  return transporter;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: nodemailer.SendMailOptions['attachments'];
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  state?: string;
  date?: string;
  time?: string;
  pageTitle?: string;
  durationMinutes?: number;
}

interface SupportFormData {
  name: string;
  email: string;
  phone?: string;
  state?: string;
  query: string;
}

// Generic email sending function
export async function sendEmail({ to, subject, html, attachments }: EmailOptions) {
  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    to,
    subject,
    html,
    attachments,
  };

  const transport = getTransporter();
  await transport.sendMail(mailOptions);
}

// Admin notification email for contact form
export async function sendContactAdminEmail(data: ContactFormData, meetLink?: string, eventId?: string) {
  const subject = `📌 New Consultation Request - ${data.pageTitle || 'Ashtronx'}`;
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; border-radius: 10px;">
      <h2 style="color: #2c3e50; margin-bottom: 10px;">${data.pageTitle || 'Ashtronx'}</h2>
      <p style="font-size: 16px; margin-bottom: 20px;">
        A new consultation request has been submitted. Here are the details:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
        <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${data.email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone || 'N/A'}</td></tr>
        <tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">State/Union Territory:</td><td style="padding: 8px;">${data.state || 'N/A'}</td></tr>
        ${data.date ? `<tr><td style="padding: 8px; font-weight: bold;">Date:</td><td style="padding: 8px;">${data.date}</td></tr>` : ''}
        ${data.time ? `<tr style="background-color: #f1f1f1;"><td style="padding: 8px; font-weight: bold;">Time:</td><td style="padding: 8px;">${data.time}</td></tr>` : ''}
      </table>
      ${meetLink ? `<p style="font-size: 14px; color: #666; margin-top: 20px;">Meet Link: <a href="${meetLink}" target="_blank">${meetLink}</a></p>` : ''}
      <p style="font-size: 14px; color: #666; margin-top: 20px;">
        This is an automated notification. Please follow up with the client at the scheduled time.
      </p>
    </div>
  `;

  await sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject,
    html,
  });
}

// User confirmation email for contact form
export async function sendContactUserEmail(data: ContactFormData, meetLink?: string) {
  const subject = `Your Consultation Details - ${data.pageTitle || 'Ashtronx'}`;
  const html = `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header with gradient + Logo -->
    <div style="background: linear-gradient(135deg, #1D293D 0%, #2D3E5D 100%); color: #fff; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between;">
      <!-- Left side (title) -->
      <div>
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">${data.pageTitle || 'Ashtronx'}</h2>
        <p style="margin: 6px 0 0; opacity: 0.9; font-size: 14px;">Ashtronx Consultation Confirmation</p>
      </div>
      
      <!-- Right side (logo) -->
      <div>
        <img src="cid:logo" alt="Ashtronx Logo" width="48" height="48" style="border-radius: 6px;" />
      </div>
    </div>
      
      <!-- Main content -->
      <div style="padding: 32px; color: #333; background: #ffffff;">
        <p style="margin: 0 0 24px; color: #666; line-height: 1.6;">
          Dear <strong style="color: #1D293D;">${data.name}</strong>,
        </p>
        
        <p style="margin: 0 0 28px; color: #666; line-height: 1.6;">
          Thank you for choosing Ashtronx! We're excited to help you with your entrepreneurial journey. 
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
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${data.phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">State/UT</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${data.state || 'N/A'}</td>
            </tr>
            ${data.date ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #5a6575; font-weight: 500;">Date</td><td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1D293D;">${data.date}</td></tr>` : ''}
            ${data.time ? `<tr><td style="padding: 10px 0; color: #5a6575; font-weight: 500;">Time</td><td style="padding: 10px 0; color: #1D293D;">${data.time}</td></tr>` : ''}
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
          <strong style="color: #1D293D;">The Ashtronx Team</strong>
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background: #f5f7fb; padding: 20px; text-align: center; border-top: 1px solid #e8e8e8;">
        <p style="margin: 0; font-size: 12px; color: #8c8c8c;">
          © ${new Date().getFullYear()} Ashtronx. All rights reserved.<br>
          <a href="#" style="color: #1D293D; text-decoration: none; margin: 0 8px;">Privacy Policy</a> • 
          <a href="#" style="color: #1D293D; text-decoration: none; margin: 0 8px;">Terms of Service</a>
        </p>
      </div>
    </div>
  `;

  await sendEmail({
    to: data.email,
    subject,
    html,
    attachments: [
      {
        filename: 'NewL.png',
        path: process.cwd() + '/public/NewL.jpg',
        cid: 'logo'
      }
    ]
  });
}

// Admin notification email for support form
export async function sendSupportAdminEmail(data: SupportFormData) {
  const subject = `📌 New Support Query from ${data.name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Query Received</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td>${data.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email:</td><td>${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td>${data.phone || 'N/A'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">State:</td><td>${data.state || 'N/A'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Query:</td><td>${data.query}</td></tr>
      </table>
    </div>
  `;

  await sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject,
    html,
  });
}

// User confirmation email for support form
export async function sendSupportUserEmail(data: SupportFormData) {
  const subject = '✅ We received your support request';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
      <div style="background:#1D293D; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">Support Request Received</h2>
      </div>
      <div style="padding:20px; color:#333;">
        <p>Dear <strong>${data.name}</strong>,</p>
        <p>Thank you for contacting us. Our support team has received your query and will get back to you soon.</p>
        <h3>Your Query:</h3>
        <p style="background:#f9f9f9; padding:10px; border-radius:5px;">${data.query}</p>
        <p style="margin-top:20px;">Best regards,<br/>Support Team</p>
      </div>
    </div>
  `;

  await sendEmail({
    to: data.email,
    subject,
    html,
  });
}

// OTP email function
export async function sendOTPEmail(email: string, otp: string) {
  const subject = 'Verify Your Email - Ashtronx Consultation';
  const html = `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

    <!-- Header with logo -->
    <div style="background: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #f0f0f0;">
      <img src="cid:logo" alt="Ashtronx Logo" style="height: 48px;" />
    </div>

    <!-- Main content -->
    <div style="padding: 36px; color: #333; background: #ffffff;">
      <h2 style="margin: 0 0 20px; font-size: 22px; font-weight: 600; text-align: center; color: #1D293D;">
        Verify Your Email Address
      </h2>

      <p style="margin-bottom: 20px; color: #666; line-height: 1.6; text-align: center;">
        Thank you for booking a consultation with Ashtronx. To complete your registration, please use the following One-Time Password:
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
      <p style="margin: 0; color: #1D293D; font-weight: 600; font-size: 15px;">The Ashtronx Team</p>
      <p style="margin: 20px 0 0; font-size: 12px; color: #8c8c8c;">
        © ${new Date().getFullYear()} Ashtronx. All rights reserved.
      </p>
    </div>
  </div>
  `;

  await sendEmail({
    to: email,
    subject,
    html,
    attachments: [
      {
        filename: 'NewL.png',
        path: process.cwd() + '/public/NewL.jpg',
        cid: 'logo'
      }
    ]
  });
}
