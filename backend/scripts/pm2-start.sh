#!/usr/bin/env bash
set -euo pipefail

# Move to backend root
cd "$(dirname "$0")/.."

if ! command -v pm2 >/dev/null 2>&1; then
  echo "pm2 not found — installing globally..."
  npm install -g pm2
fi

echo "Starting DocBook backend with PM2 (production env)..."
pm2 start ecosystem.config.js --env production
pm2 save

echo "To enable PM2 to start on system boot, run the following command and follow instructions:"
echo "  pm2 startup"
