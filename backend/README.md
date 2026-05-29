PM2 keepalive setup

Steps to run the backend under PM2 so it stays up and restarts on crash/boot:

1. Make the helper script executable:

   chmod +x scripts/pm2-start.sh

2. Start the app with PM2 (installs pm2 if missing):

   npm run pm2-start

3. Save the process list so PM2 can resurrect it on reboot:

   pm2 save

4. Generate a system startup script (this may require sudo):

   pm2 startup

Notes:
- `pm2 start ecosystem.config.js --env production` is used by the helper script.
- If you deploy to a platform that stops idle processes (e.g., some free hosting), consider using a platform-specific keepalive or upgrading to a paid plan.

Render deployment
-----------------

1. Ensure the repo is pushed to GitHub and your main branch is named `main` (or update `render.yaml` branch).

2. The repository includes `render.yaml` at the repo root. When you connect this GitHub repo in Render and enable deploys, Render will:

   - run `cd backend && npm ci` to install dependencies
   - run `cd backend && npm start` to launch the server

3. Required environment variables (set these in Render dashboard under the service's Environment settings):

   - `MONGO_URI` (or however `config/db.js` reads the connection string)
   - `JWT_SECRET`
   - `FRONTEND_URL`
   - any cloudinary/stripe/razorpay keys used by your app

4. After connecting the repo, Render will deploy on every push to the configured branch. If you prefer to use PM2 locally or on a VPS, follow the PM2 steps above.

