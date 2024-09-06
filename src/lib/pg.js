import "server-only";

import postgres from "pg";
import config from "@/lib/config";
const { SUPABASE } = config;

const pg = new postgres.Pool({
  host: SUPABASE.host,
  user: SUPABASE.user,
  database: SUPABASE.database,
  password: SUPABASE.password,
  port: SUPABASE.port,
});

export default pg;
