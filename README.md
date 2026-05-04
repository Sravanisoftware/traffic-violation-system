# 🚓 Traffic Violation Management System

## 📌 Project Description
This project is a full-stack web application designed to help police authorities manage traffic violations efficiently. It allows police officers to record violations, upload evidence images, and analyze data using charts.

The system also includes basic AI-based detection for helmet violations.

---

## 🚀 Features

### 🔐 Authentication
- Secure login using JWT
- Role-based access (Police / Admin / Citizen)

### 🚗 Violation Management
- Add traffic violations
- Store vehicle number, violation type, fine amount
- Assign violation to a user

### 📸 Image Upload
- Upload proof images (helmet/no helmet)
- Stored in backend server

### 🤖 AI Helmet Detection
- Uses Python + YOLO model
- Detects whether rider is wearing helmet or not

### 📊 Analytics Dashboard
- Bar chart for violation types
- Pie chart for distribution
- Total fine collection displayed

---

## 🌐 Web Pages

### 1️⃣ Login Page
- User enters email and password
- Generates JWT token

### 2️⃣ Dashboard (Police/Admin)
- Add violation form
- View all violations
- Upload images
- View analytics charts

### 3️⃣ Citizen View (Optional)
- View only their own violations
- Check fines assigned

---

## 🛠️ Technologies Used

### 💻 Frontend
- React (Vite)
- Axios (API calls)
- Recharts (Graphs)

### 🖥️ Backend
- Node.js
- Express.js
- JWT Authentication
- Multer (Image upload)

### 🗄️ Database
- MongoDB
- Mongoose

### 🤖 AI Module
- Python
- OpenCV
- YOLO (Ultralytics)

---

## 📂 Project Structure

traffic-violation-system/
├── frontend/ (React app)
├── backend/ (Node server)
├── backend/ai/ (Python AI detection)
├── uploads/ (Images)

---

## ▶️ How to Run

### Backend
cd backend  
npm install  
npm start  

### Frontend
cd frontend  
npm install  
npm run dev  

---

## 👩‍💻 Author
Sravani
