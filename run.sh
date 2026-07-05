#!/bin/bash

echo "Starting Hotel Management System..."

# Start MySQL database
echo "1. Starting MySQL database..."
brew services start mysql
sleep 2

# Navigate to backend directory and start Node.js server
echo "2. Starting Node.js backend server..."
cd Structure/backEnd
node app.js &
BACKEND_PID=$!
sleep 2

# Start PHP frontend server
echo "3. Starting PHP frontend server..."
php -S 0.0.0.0:5500 &
FRONTEND_PID=$!

echo ""
echo "✅ All services started successfully!"
echo "Frontend: http://localhost:5500"
echo "Backend: Running on Node.js"
echo "Database: MySQL is running"
echo ""
echo "Press Ctrl+C to stop all services..."

# Wait for processes and handle cleanup
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo 'Services stopped.'; exit" SIGINT SIGTERM

wait
