import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message, source } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Create transporter — uses Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Savatronic Website" <${process.env.GMAIL_USER}>`,
      to: "savatronic12@gmail.com",
      replyTo: email,
      subject: `[${source || "Contact"}] New inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0C0C0C; color: #ffffff; padding: 32px; border: 1px solid rgba(255,255,255,0.08);">
          <h2 style="color: #67FCF1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 24px;">
            ${source || "Contact Form"} Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;"><a href="mailto:${email}" style="color: #67FCF1;">${email}</a></td>
            </tr>
            ${organization ? `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Organization</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">${organization}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px; white-space: pre-wrap;">${message}</td>
            </tr>` : ""}
          </table>
          <p style="margin-top: 32px; font-size: 11px; color: rgba(255,255,255,0.2);">
            Sent from savatronic.com — ${new Date().toISOString()}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
