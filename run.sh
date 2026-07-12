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
echo "Type 'exit' to stop all services or press Ctrl+C..."
echo ""

# Function to cleanup and stop all services
cleanup() {
  echo ""
  echo "Stopping all services..."
  kill $BACKEND_PID 2>/dev/null
  kill $FRONTEND_PID 2>/dev/null
  brew services stop mysql 2>/dev/null
  echo "✅ All services stopped."
  exit 0
}

# Handle Ctrl+C and SIGTERM
trap cleanup SIGINT SIGTERM

# Monitor for 'exit' command in background
(
  while true; do
    read -r user_input
    if [ "$user_input" = "exit" ]; then
      cleanup
    fi
  done
) &
MONITOR_PID=$!

# Wait for background processes
wait $BACKEND_PID $FRONTEND_PID
