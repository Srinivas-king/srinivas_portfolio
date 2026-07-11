# LTSB Portfolio Application

A beautiful, cinematic, and responsive full-stack developer portfolio application.

## System Components

### 1. Database (PostgreSQL)
Ensure PostgreSQL is running locally (e.g., using pgAdmin 4) on port `5432` with your credentials:
1. Create a database named `portfolio`.
2. Run the SQL schema query from [init.sql](file:///d:/portfolio/server/init.sql) to set up the `contact_messages` table:
   ```sql
   CREATE TABLE IF NOT EXISTS contact_messages (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### 2. Backend Server Setup & Start (Port 5000)
1. Open a new terminal in your IDE and navigate to the backend directory:
   ```bash
   cd d:\portfolio\server
   ```
2. Install the required Node.js backend packages:
   ```bash
   npm install
   ```
3. Start the Express development server:
   ```bash
   npm start
   ```
   *The console will display logs confirming successful server startup and active database connection pool verification.*

### 3. Frontend React App Setup & Start (Port 5173)
1. Open a separate terminal and navigate to the root portfolio directory:
   ```bash
   cd d:\portfolio
   ```
2. Install the frontend dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. Access the web client in your web browser at **[http://localhost:5173](http://localhost:5173)**.

