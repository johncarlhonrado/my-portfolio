import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic email sanity check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "honradojohncarl17@gmail.com", // 👈 replace with the address you want to receive messages at
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}