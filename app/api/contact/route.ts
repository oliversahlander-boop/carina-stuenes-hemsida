import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const message = String(body.message || "").trim();

    if (!firstName || !lastName || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Förnamn, efternamn, e-post, telefonnummer och stad är obligatoriska." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Ogiltig e-postadress." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "E-posttjänsten är inte konfigurerad på servern." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const to = "stuenesshop@gmail.com";
    const fromAddress = process.env.SMTP_FROM || smtpUser || "stuenesshop@gmail.com";
    const customerDisplay = `${firstName} ${lastName}`.trim();
    const subject = `Ny kontaktförfrågan från ${firstName} ${lastName}`;

    const text = [
      "Ny kontaktförfrågan från hemsidan",
      "",
      `Förnamn: ${firstName}`,
      `Efternamn: ${lastName}`,
      `E-post: ${email}`,
      `Telefonnummer: ${phone}`,
      `Stad: ${city}`,
      "",
      "Meddelande:",
      message || "(Inget meddelande)",
    ].join("\n");

    const html = `
      <h2>Ny kontaktförfrågan från hemsidan</h2>
      <p><strong>Förnamn:</strong> ${firstName}</p>
      <p><strong>Efternamn:</strong> ${lastName}</p>
      <p><strong>E-post:</strong> ${email}</p>
      <p><strong>Telefonnummer:</strong> ${phone}</p>
      <p><strong>Stad:</strong> ${city}</p>
      <p><strong>Meddelande:</strong><br/>${(message || "(Inget meddelande)").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      to,
      from: `${customerDisplay} via Health Stuenes <${fromAddress}>`,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Något gick fel när förfrågan skulle skickas." },
      { status: 500 },
    );
  }
}
