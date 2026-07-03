# WebApplication-Hotel-FinalProject

## Run the project

### 1. Start the database
```bash
brew services start mysql
```

### 2. Start the backend
```bash
node app.js
```

### 3. Start the frontend
```bash
php -S localhost:5500
```

## Project structure

```text
WebApplication-Hotel-FinalProject/
├── CSS/                  # Frontend styles
├── Image/                # Hotel images
├── index.php             # Main homepage entry
├── php/                  # PHP-based pages and legacy backend logic
├── Script/
│   ├── js/               # Frontend JavaScript
│   └── php/              # Node.js backend migration files
│       ├── app.js
│       ├── dataBase.js
│       ├── controllers/
│       │   ├── BookingController.js
│       │   └── HealthController.js
│       └── routes/
│           ├── bookingRoutes.js
│           └── healthRoutes.js
└── README.md
```

## Notes
- Make sure MySQL is installed and running before starting the backend.
- Open the frontend in your browser at http://localhost:5500
- The backend API is currently being migrated from PHP to Node.js.
- The Node.js backend entry point is currently [Script/php/app.js](Script/php/app.js).