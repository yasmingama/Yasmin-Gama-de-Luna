import { Pool } from "pg";

// Corrija a string de conexão do PostgreSQL
const connectionString =
  "postgresql://postgres.mxrziuixfndacnxmkkrv:huusijajjfjsfk@aws-0-sa-east-1.pooler.supabase.com:6543/postgres";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;