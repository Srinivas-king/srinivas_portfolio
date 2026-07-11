const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test database connection and initialize table on server start
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ PostgreSQL Connection Error:", err.message);
    console.error("Full Error Details:", err);
  } else {
    console.log("✅ PostgreSQL connected successfully at:", res.rows[0].now);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    pool.query(createTableQuery, (tableErr) => {
      if (tableErr) {
        console.error(
          "❌ Error creating contact_messages table:",
          tableErr.message
        );
      } else {
        console.log(
          '✅ PostgreSQL "contact_messages" table is verified/created.'
        );
      }
    });
  }
});

module.exports = pool;