import "server-only";

const config = {
  AWS: {
    region: process.env.AWS_REGION,
    apiVersion: "2010-12-01",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  },
  GMAIL: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  SUPABASE: {
    host: process.env.PG_HOST,
    database: process.env.PG_DATABSE,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
  },
};

export default config;
