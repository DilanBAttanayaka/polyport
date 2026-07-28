import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message, turnstileToken } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security check is required." },
        { status: 400 }
      );
    }

    // Verify Cloudflare Turnstile token
    const secretKey = process.env.TURNSTILE_SECRET_KEY || "1x00000000000000000000000000000000";
    
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
      }
    );

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return NextResponse.json(
        { error: "Security check failed. Please try again." },
        { status: 400 }
      );
    }

    // Log the message to the console
    console.log("=========================================");
    console.log("NEW CONTACT FORM SUBMISSION (VERIFIED):");
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log("=========================================");

    // In a real production setup, here we would integrate Resend or SMTP to send the email
    // Example using Resend if the key is present:
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Polyport Contact <onboarding@resend.dev>",
            to: "polyportofficial@gmail.com",
            subject: `New Polyport Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("Failed to send email via Resend:", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
