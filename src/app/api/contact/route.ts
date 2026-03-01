// contact form api route
// handles POST requests from the contact form
// validates the data and logs it (no email service hooked up yet)

import { NextRequest, NextResponse } from "next/server";

// shape of the data coming from the form
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // make sure nothing is empty
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // basic email format check — not perfect but catches the obvious typos
    // looks for: something @ something . something
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // dont accept super short messages
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // for now just logging it, will hook up an email service later
    console.log("New contact form submission:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message.substring(0, 100) + "...", // truncate so logs dont get crazy long
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
