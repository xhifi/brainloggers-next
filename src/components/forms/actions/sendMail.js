"use server";
import { gmail } from "@/lib/nodemailer";
import pg from "@/lib/pg";

const extractId = (messageId) => {
  const regex = /<([^@>]+)@/;
  const match = messageId.match(regex);
  if (match) {
    return match[1];
  }
  return null;
};

const sendMail = async ({ name, email, ph, message }) => {
  try {
    const mailed = await gmail.sendMail({
      from: "Brainloggers<info@brainloggers.co.uk>",
      to: [email, "info@brainloggers.co.uk"],
      subject: `Meeting Booked at Brainloggers - ${email}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${ph}\nMessage: ${message}`,
      html: `<p>From: ${name}\n
            Email: ${email}\n
            Phone: ${ph}
            <hr />
            <p>Message: ${message}</p>
        `,
    });

    const messageId = extractId(mailed.messageId);

    const {
      rows: [data],
    } = await pg.query(
      "INSERT INTO customer_inquiries (name, email, phone, message, messageId) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, ph, message, messageId],
    );

    return {
      booked: true,
      dbId: data.id,
      messageId: data.messageid,
      email: data.email,
      name: data.name,
      ph: data.phone,
      message: data.message,
      createdAt: data.createdat,
    };
  } catch (error) {
    console.log(error);
    if (error) return { booked: false, error: error.message };
  }
};

export default sendMail;
