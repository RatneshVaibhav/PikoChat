PikoChat
🌱 Because sometimes, all we need is someone to interact with new peaople and share experiences.

A peer-to-peer interaction platform that connects individuals seeking to learn new languages by interacting with people all across the world. Built with the MERN stack, PikoChat enables users to connect with supportive peers, engage in real-time chat, and conduct video calls for meaningful conversations.

<img width="1916" height="991" alt="LandingPage" src="https://github.com/user-attachments/assets/02759498-2f0a-48cf-93e9-8490ac515651" />

[🌐 Deployed Website](https://pikochat.onrender.com)
✨ Features

User Authentication: Secure signup/login with JWT-based authentication image image
<img width="1916" height="991" alt="signup" src="https://github.com/user-attachments/assets/32fea5fe-44c2-4d4e-b837-faccf1c68bf6" />
<img width="1916" height="991" alt="login" src="https://github.com/user-attachments/assets/6f453dc2-b3c5-4941-be23-a2100e0a42ba" />

Profile Onboarding: Complete profile setup with support preferences image
<img width="1916" height="991" alt="onboarding" src="https://github.com/user-attachments/assets/4b75a0ed-9e52-4318-9316-830c42898418" />

Friend System: Send, receive, and accept friend requests image image
<img width="1916" height="991" alt="Notifications" src="https://github.com/user-attachments/assets/eb76c255-64f7-4da2-bebe-667c84884cfb" />
<img width="1916" height="991" alt="friends" src="https://github.com/user-attachments/assets/97f2928c-faf5-4019-9b0c-93eedf865080" />


Real-time Chat: Powered by Stream Chat for seamless messaging image
<img width="1916" height="991" alt="chat" src="https://github.com/user-attachments/assets/c7a62648-9f95-46ad-969f-4cd89bf8b9ef" />


Video Calls: Integrated video calling using Stream Video SDK image
<img width="1470" height="747" alt="505430821-e4dac90c-9155-429a-8675-ce8d6d426796" src="https://github.com/user-attachments/assets/0e53d348-adeb-4548-b2cb-170c01d10487" />


Friend Discovery: Find peers based on support topics

Theme Customization: 30+ themes to personalize your experience

Responsive Design: Works seamlessly across devices

🚀 Tech Stack
Frontend
React 19 - UI library
React Router - Navigation
TanStack Query - Data fetching and caching
Zustand - State management
Stream Chat React - Chat interface
Stream Video React SDK - Video calling
Tailwind CSS - Styling
DaisyUI - Component library
Axios - HTTP client
Lucide React - Icons
react-hot-toast- Pop-up messages
Backend
Node.js & Express - Server framework
MongoDB & Mongoose - Database
JWT - Authentication
bcryptjs - Password hashing
Stream Chat - Chat backend
Cookie Parser - Cookie handling
CORS - Cross-origin resource sharing
dotenv - Environment variables
📋 Prerequisites
Node.js (v16 or higher)
MongoDB (local or Atlas)
Stream Account (for chat and video features)
Get your API key from Stream.io
🛠️ Installation
1. Clone the repository
git clone <repository-url>
cd sahaara
2. Backend Setup
cd backend
npm install
Create a .env file in the backend directory:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
3. Frontend Setup
cd frontend
npm install
Create a .env file in the frontend directory:

VITE_STREAM_API_KEY=your_stream_api_key
🏃 Running the Application
Development Mode
Backend:

cd backend
npm run dev
Server runs on http://localhost:3000

Frontend:

cd frontend
npm run dev
Client runs on http://localhost:5173

Production Build
# From root directory
npm run build
npm start
📁 Project Structure
sahaara/
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
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # API and utilities
│   │   ├── store/            # Zustand stores
│   │   ├── constants/        # App constants
│   │   └── main.jsx          # Entry point
│   └── package.json
└── package.json
🔑 Key Features Explained
Authentication Flow
Users sign up with email and password
JWT token stored in HTTP-only cookie
Protected routes verify token on each request
Onboarding required before accessing main features
Friend System
Discover users based on support topics
Send friend requests to peers
Accept/decline incoming requests
View your friends list
Chat & Video
Real-time messaging with Stream Chat
One-on-one video calls via Stream Video
Video call links sent through chat
Persistent chat history
Support Topics
Users can specify:

Can Support: Topics they can help others with
Need Support: Areas where they seek support
Available topics include:

Learn new language
Interaction with people all across the world
Make online friends
Loneliness & Isolation Support
Depression Support
And more...
🎨 Themes
PikoChat includes 30+ beautiful themes powered by DaisyUI:

Light/Dark modes
Cupcake, Forest, Synthwave
Dracula, Nord, Cyberpunk
And many more!
🔒 Security Features
Password hashing with bcryptjs
HTTP-only cookies for JWT
CORS protection
Input validation
Protected API routes
📝 API Endpoints
Authentication
POST /api/auth/signup - Register new user
POST /api/auth/login - User login
POST /api/auth/logout - User logout
POST /api/auth/onboarding - Complete profile
GET /api/auth/me - Get current user
Users
GET /api/users - Get recommended users
GET /api/users/friends - Get user's friends
POST /api/users/friend-request/:id - Send friend request
PUT /api/users/friend-request/:id/accept - Accept request
GET /api/users/friend-requests - Get friend requests
GET /api/users/outgoing-friend-requests - Get outgoing requests
Chat
GET /api/chat/token - Get Stream chat token
💡 What I Learned
Technical Skills
Frontend Development:

Building dynamic UIs with React components, hooks (useState, useEffect), and conditional rendering
Implementing client-side routing with React Router for dynamic pages like /chat/:id
Creating reusable utility functions and mapping constants for icon rendering
Working with data arrays to render lists of support topics dynamically
Responsive design with Tailwind CSS for cards, badges, and layouts
Managing asynchronous operations and displaying loading/error states
Backend Development:

Building RESTful APIs with Express.js (GET/POST/PUT endpoints)
Implementing authentication middleware with JWT for route protection
Database operations with MongoDB and Mongoose for users, friend requests, and chat data
Structuring backend code with controllers, models, routes, and middleware
Full-Stack Integration:

Connecting React frontend with Express backend via Axios
Handling API responses and error states (404s, validation errors)
Managing environment variables for development and production
Integrating third-party services (Stream Chat & Video SDK)
Development Practices:

Version control with Git for tracking changes
Debugging API routing issues and frontend-backend communication
Project architecture planning (folder structure, data flow)
Soft Skills & Design Thinking
Problem-Solving: Debugged routing mismatches, API errors, and integration issues
Adaptability: Transformed a language exchange tutorial into a mental health peer-support platform
User-Centric Design: Focused on creating intuitive UI with meaningful badges, icons, and clear navigation
Feature Prioritization: Delivered core functionality (chat, video, friend system) within a 3-day timeline
Forward Thinking: Planned future improvements like multi-select for support topics
Full-Stack Mindset: Gained confidence working across frontend, backend, database, and deployment
