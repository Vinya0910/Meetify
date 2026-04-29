🎥 Real-Time Video Meeting App

A full-stack real-time video conferencing application built using WebRTC, Socket.IO, and React. This app allows users to join meetings, share video/audio, chat in real-time, and collaborate seamlessly.

---

✨ Features

- 🔐 User Authentication (Login / Signup)
- 🎥 Real-time Video Calling (WebRTC)
- 🎙️ Audio / Video Toggle
- 🖥️ Screen Sharing
- 💬 Live Chat Messaging
- 👥 Multi-user Video Rooms

---

🧠 GDME (Design & Engineering Approach)

- G – Goals: Build a scalable real-time video meeting platform similar to Google Meet
- D – Design: WebRTC for peer-to-peer streaming, Socket.IO for signaling, React for UI
- M – Methods: MediaDevices API, peer connections, React Hooks for state management
- E – Evaluation: Tested multi-user rooms, handled disconnects, optimized performance

---

🛠️ Tech Stack

- Frontend: React.js, Material UI, CSS
- Backend: Node.js, Express.js, Socket.IO
- Real-Time: WebRTC

---

⚙️ Setup

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# frontend
cd frontend
npm install

# backend
cd backend
npm install

Create ".env" in backend:

MONGO_URI=your_mongodb_url
PORT=8000

Run:

npm run dev

---

🚀 Future Improvements

- JWT Authentication
- Deployment (Vercel + Render)
- UI Enhancements
- Meeting Analytics

---
