Here is your **fully combined, clean, and GitHub-ready README in one complete format** 👇

---

```md
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

```

traffic-violation-system/
├── frontend/ (React app)
├── backend/ (Node server)
├── backend/ai/ (Python AI detection)
├── uploads/ (Images)

````

---

## 📸 Screenshots

### 🔐 Login Page
![Login Page](https://github.com/user-attachments/assets/768fb963-1531-43b0-ba45-527cfd72344d)

### 📊 Dashboard
![Dashboard](https://github.com/user-attachments/assets/5f867f51-fa98-4556-a01e-902d7f69e896)

### 🚗 Add Violation
![Add Violation](https://github.com/user-attachments/assets/20440d83-50f5-4f2e-97d3-e38f70efc2c5)

### 📈 Analytics Dashboard
![Analytics 1](https://github.com/user-attachments/assets/2b9550fe-5d66-4748-8c37-8d1bf13c644b)

![Analytics 2](https://github.com/user-attachments/assets/1a18411d-db19-4db8-bec8-c617a5b8e895)

### 📊 Violation Distribution
![Distribution 1](https://github.com/user-attachments/assets/5f3ad1ab-b461-4c09-a762-72d5a2c1ce22)

![Distribution 2](https://github.com/user-attachments/assets/a6e7b8d4-7f61-4c49-b744-763fbd46efcf)

---

## ▶️ How to Run

### Backend
```bash
cd backend  
npm install  
npm start  
````

### Frontend

```bash
cd frontend  
npm install  
npm run dev  
```

---

## 👩‍💻 Author

**Sravani**

