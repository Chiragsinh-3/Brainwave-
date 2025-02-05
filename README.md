# 📝 Brainwave! - Free Note Taking App

<div align="center">

![Brainwave!](https://img.shields.io/badge/Brainwave-1.0.0-purple.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-latest-green.svg)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)
![Node](https://img.shields.io/badge/Node->=18.0.0-green.svg)

A powerful, completely free note-taking application built with MERN Stack (MongoDB, Express, React, Node.js) and styled with shadcn/ui.

[Live Demo](https://brainwave7.netlify.app/) • [Report Bug](https://github.com/Chiragsinh-3/Brainwave.git) • [Request Feature](https://github.com/Chiragsinh-3/Brainwave.git)

</div>

## ✨ Features

- 🚀 **Completely Free** - No hidden costs, no premium features
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🌙 **Dark Mode** - Easy on the eyes, day and night
- 🏷️ **Smart Organization** - Tags and folders for better organization
- 🔒 **Secure Authentication** - User authentication with JWT
- 💾 **Cloud Storage** - Notes stored securely in MongoDB

## 🛠️ Tech Stack

- **Frontend**

  - React with Vite
  - TailwindCSS
  - shadcn/ui
  - Context API for state management

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── db.js
│   ├── index.js
│   └── package.json
|
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── lib/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .eslintrc.js
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── vite.config.js
└── tailwind.config.js
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- MongoDB installed and running
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Chiragsinh-3/Brainwave.git
cd brainwave
```

2. Install dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

3. Environment Setup

```bash
# Create .env file in root directory
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start Development Server

```bash
# Start both frontend and backend servers
npm run both
```

Visit `http://localhost:5173` to see the app running!

## 🎨 Styling

The project uses a combination of:

- TailwindCSS for utility-first styling
- shadcn/ui for pre-built components
- Custom CSS in `src/App.css` and `src/index.css`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
Made with ❤️ 
</div>
