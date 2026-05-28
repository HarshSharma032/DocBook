# 🏥 CUREPOINT — Doctor Appointment Booking Platform

> A full-stack MERN application for seamless doctor appointment booking with role-based access, payments, real-time notifications, and admin dashboard support.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/cloud/atlas)

---

## 📂 Folder Structure

```bash
curepoint/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── logs/
│   ├── seeder.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── .env.example
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Features

* Patient authentication and authorization
* Doctor registration and approval workflow
* Doctor listing and profile pages
* Appointment booking system
* Appointment history dashboard
* Admin dashboard with analytics
* Razorpay payment integration
* Real-time notifications using Socket.io
* Cloudinary image upload support
* Responsive modern UI
* Protected routes and JWT authentication

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Socket.io
* Razorpay
* Cloudinary
* Nodemailer

---

## ⚙️ Environment Variables

### Backend `.env`

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_key
```

---

## ▶️ Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit:

```bash
http://localhost:5173
```

---

## 🌍 Deployment

### Backend

Deploy on:

* Render

### Frontend

Deploy on:

* Vercel

---

## 📈 Future Improvements

* Video consultation support
* Appointment reminders
* Calendar integration
* Email notifications
* Doctor availability management

---

## 💼 Resume Description

**CUREPOINT — Doctor Appointment Booking Platform**

* Developed a full-stack MERN healthcare platform with patient, doctor, and admin role-based authentication.
* Implemented appointment booking workflow with Razorpay payment gateway integration and real-time notifications using Socket.io.
* Built responsive dashboards, protected routes, MongoDB-based appointment management, and Cloudinary image upload support.
* Optimized backend APIs with modular architecture, validation, and secure JWT authentication.
