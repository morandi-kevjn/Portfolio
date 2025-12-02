// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Verify transporter configuration
        await transporter.verify();

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            cc: process.env.EMAIL_CC,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #16a34a; margin-bottom: 20px;">New Portfolio Contact</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
            <strong style="color: #333;">Name:</strong> ${name}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
            <strong style="color: #333;">Email:</strong> ${email}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
            <strong style="color: #333;">Subject:</strong> ${subject}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
            <strong style="color: #333;">Message:</strong><br>
            <div style="margin-top: 10px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
            replyTo: email,
        });

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully!'
        });

    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}