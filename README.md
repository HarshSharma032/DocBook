# 🏥 DocBook — Doctor Appointment Booking Platform

> A full-stack MERN application for seamless doctor appointment booking with secure authentication, online payments, admin management, and responsive UI.

---

# 🌐 Live Demo

## Frontend

https://doc-book-jade.vercel.app/

## Backend API

https://docbook-lwjv.onrender.com

---

# ✨ Features Implemented

## 👤 User Features

* User Registration & Login Authentication
* Browse Available Doctors
* Book Doctor Appointments
* Online Appointment Payments using Razorpay
* View Booked Appointments
* Responsive UI for Mobile & Desktop

---

## 🩺 Doctor Features

* Doctor Dashboard
* View Scheduled Appointments
* Manage Availability
* Profile Management

---

## 🛠️ Admin Features

* Admin Authentication
* Manage Doctors
* View Platform Analytics
* Appointment Monitoring
* Dashboard Management

---

# 🚀 Additional Enhancements

* Production Deployment using Vercel & Render
* MongoDB Atlas Cloud Database
* Cloudinary Image Upload Integration
* Protected Routes & JWT Authentication
* Error Handling Middleware
* Clean Folder Structure
* Responsive Modern UI Design

---

# 🧰 Tech Stack Used

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Toastify

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Razorpay Payment Gateway
* Cloudinary

---

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📁 Project Structure

```bash
DocBook/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Project Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/HarshSharma032/DocBook.git
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

## Backend `.env`

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

CURRENCY=INR
```

---

## Frontend `.env`

```env
VITE_BACKEND_URL=https://docbook-lwjv.onrender.com
```

---

# ▶️ Run Project Locally

## Start Backend

```bash
cd backend
npm run server
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---


# 🔐 Authentication & Security

* JWT-based Authentication
* Protected API Routes
* Secure Password Handling
* Environment Variable Protection

---

# 📦 Deployment

## Frontend Deployment

* Hosted on Vercel

## Backend Deployment

* Hosted on Render

## Database

* MongoDB Atlas Cloud Database

---

# 👨‍💻 Author

Harsh Sharma

* GitHub: https://github.com/HarshSharma032

---

# 📄 License

This project is developed for educational and internship assessment purposes.
