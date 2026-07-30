import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Please fill the full form!" });
  }

  try {
    const { error: dbError } = await supabase.from("contacts").insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      message: message.trim(),
    });
    if (dbError) throw new Error(dbError.message);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mishrajagmohan0@gmail.com",
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3B82F6">New Portfolio Contact</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">${message}</td></tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent. I'll get back to you soon." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Something went wrong. Try again." });
  }
}
