import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ name?: string; email?: string; subject?: string; message?: string }>(
    event,
  );

  const { name, email, subject, message } = body || {};

  if (!name || !email || !subject || !message) {
    throw createError({ statusCode: 400, statusMessage: "Missing required fields" });
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw createError({
      statusCode: 500,
      statusMessage: "Email server is not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS.",
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const to = "ggonzales7418@gmail.com";

  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  await transporter.sendMail({
    from: `Portfolio Contact <${user}>`,
    replyTo: `${name} <${email}>`,
    to,
    subject,
    text,
    html,
  });

  return { ok: true };
});
