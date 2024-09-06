import "server-only";

import nodemailer from "nodemailer";
import config from "./config";

const gmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.GMAIL.user,
    pass: config.GMAIL.pass,
  },
});

export { gmail };
