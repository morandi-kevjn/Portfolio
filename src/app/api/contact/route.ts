// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // --- Email to YOU ---
        const mailToOwner = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            cc: process.env.MAIN_EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            replyTo: email,
            html: `... your existing HTML for the owner email ...`
        };

        // --- Confirmation Email to SENDER ---
        const mailToSender = {
            from: process.env.EMAIL_USER,
            to: email, // Send to the person who filled out the form
            subject: `Thank you for your message, ${name}!`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #16a34a;">Message Received!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch. I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Kevjn Morandi</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">This is an automated confirmation. Please do not reply directly to this email.</p>
        </div>
      `,
        };

        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(mailToOwner),
            transporter.sendMail(mailToSender)
        ]);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }
}