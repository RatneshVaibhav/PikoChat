🌱 PikoChat

Because sometimes, all we need is someone to interact with and share experiences.

PikoChat is a peer-to-peer interaction platform that connects individuals worldwide to learn new languages, make friends, and share meaningful conversations.
Built with the MERN Stack, PikoChat offers real-time chat, video calls, and a supportive community for global connection.

🌐 Live Demo

👉 PikoChat on Render

✨ Features
🔒 User Authentication

Secure signup and login with JWT-based authentication.
<img src="https://github.com/user-attachments/assets/32fea5fe-44c2-4d4e-b837-faccf1c68bf6" width="700" />

🧭 Profile Onboarding

Complete your profile and choose support or learning preferences.
<img src="https://github.com/user-attachments/assets/4b75a0ed-9e52-4318-9316-830c42898418" width="700" />

🤝 Friend System

Send, receive, and accept friend requests with real-time notifications.
<img src="https://github.com/user-attachments/assets/eb76c255-64f7-4da2-bebe-667c84884cfb" width="700" />

💬 Real-Time Chat

Seamless one-on-one messaging powered by Stream Chat.
<img src="https://github.com/user-attachments/assets/c7a62648-9f95-46ad-969f-4cd89bf8b9ef" width="700" />

🎥 Video Calls

Engage in real-time video conversations using Stream Video SDK.
<img src="https://github.com/user-attachments/assets/0e53d348-adeb-4548-b2cb-170c01d10487" width="700" />

🔍 Friend Discovery

Find peers based on interests, support topics, or learning goals.

🎨 Theme Customization

Choose from 30+ themes to personalize your experience.

📱 Responsive Design

Optimized for all devices — desktop, tablet, and mobile.

🚀 Tech Stack
🖥️ Frontend

React 19 – UI Library

React Router – Routing

TanStack Query – Data fetching & caching

Zustand – State management

Stream Chat React – Chat UI

Stream Video SDK – Video calls

Tailwind CSS + DaisyUI – Styling

Lucide React – Icons

React Hot Toast – Notifications

Axios – API communication

⚙️ Backend

Node.js & Express – Server framework

MongoDB & Mongoose – Database

JWT & bcryptjs – Authentication

Stream Chat – Messaging backend

Cookie Parser – Cookie handling

CORS – Cross-origin setup

dotenv – Environment configuration

🧩 Prerequisites

Node.js v16+

MongoDB (Local or Atlas)

Stream.io Account for Chat & Video

⚙️ Installation
1️⃣ Clone the Repository
git clone <repository-url>
cd sahaara

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in /backend:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

3️⃣ Frontend Setup
cd frontend
npm install


Create a .env file in /frontend:

VITE_STREAM_API_KEY=your_stream_api_key

🏃 Running the Application
Development Mode

Backend:

cd backend
npm run dev


Runs at → http://localhost:3000

Frontend:

cd frontend
npm run dev


Runs at → http://localhost:5173

Production Build
npm run build
npm start

📁 Folder Structure
PikoChat/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Request handlers
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Custom middleware
│   │   ├── lib/              # Utilities (DB, Stream)
│   │   └── server.js         # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # API utils
│   │   ├── store/            # Zustand store
│   │   ├── constants/        # App constants
│   │   └── main.jsx          # Entry file
│   └── package.json
└── package.json

🔑 Core Functionalities
🔐 Authentication Flow

JWT tokens stored in HTTP-only cookies

Protected routes validated on each request

Onboarding required before accessing main features

🧑‍🤝‍🧑 Friend System

Discover users based on support topics

Send / Accept / Decline friend requests

View your friends list

💬 Chat & 🎥 Video

Real-time chat with Stream Chat

One-on-one video calls with Stream Video SDK

Persistent chat history and tokens

🧠 Support Topics

Users can define:

Can Support: Topics they can help others with

Need Support: Topics they seek help in

Examples:

Learn new languages

Make online friends

Loneliness & isolation

Depression support

Global interactions

🎨 Themes

30+ DaisyUI themes — including:
light, dark, cupcake, forest, dracula, nord, cyberpunk, and more!

🔒 Security

Password hashing with bcryptjs

HTTP-only JWT cookies

CORS protection

Input validation

Protected API routes
