"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Resend <onboarding@resend.dev>", // Once you add a domain, use hello@yourdomain.com
      to: ["Dariolulana@gmail.com"],
      subject: `New Inquiry: ${service} from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false };
  }
}
