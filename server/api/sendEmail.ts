import { Resend } from "resend";
import type { H3Event } from "h3";
import type { ContactEmail } from "~/types/ContactEmail";

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail;
    const { email, subject, message, phone, fullname } = body;
    return await resend.emails.send({
      from: "LC Website <DoNotReply@lukeclimenhage.com>",
      to: process.env.NUXT_PRIVATE_EMAIL_ADDRESS || "",
      subject: "New message from Portfolio Site Form",
      html: `
      <p>A new message has been sent from the portfolio site contact form.</p>
      <p>Here are the details of the message:</p>
      <ul>
        <li>Name : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Telephone : ${phone}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    });
  } catch (error) {
    return { error };
  }
});
