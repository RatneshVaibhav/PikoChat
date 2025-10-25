# 🌱 **PikoChat**

> *Because sometimes, all we need is someone to interact with and share experiences.*

**PikoChat** is a peer-to-peer interaction platform that connects individuals worldwide to **learn new languages**, **make friends**, and **share meaningful conversations**.  
Built with the **MERN Stack**, it offers **real-time chat**, **video calls**, and a **supportive global community**.

---

## 🌐 **Live Demo**
👉 [**Visit PikoChat**](https://pikochat.onrender.com)

---

## ✨ **Features**

### 🔒 **User Authentication**
Secure signup and login using **JWT-based authentication**.  
<img width="1916" height="991" alt="signup" src="https://github.com/user-attachments/assets/f09977a2-7f3a-49b0-b672-1f97f61ffb7b" />
<img width="1916" height="991" alt="login" src="https://github.com/user-attachments/assets/52bbcc41-1287-4003-af5d-d6b6c7b0aab0" />

---

### 🧭 **Profile Onboarding**
Complete your profile and select your support or learning preferences.  
<img src="https://github.com/user-attachments/assets/4b75a0ed-9e52-4318-9316-830c42898418" width="700" />

---

### 🤝 **Friend System**
Send, receive, and accept friend requests with real-time notifications.  
<img src="https://github.com/user-attachments/assets/eb76c255-64f7-4da2-bebe-667c84884cfb" width="700" />

---

### 💬 **Real-Time Chat**
Seamless messaging powered by **Stream Chat**.  
<img src="https://github.com/user-attachments/assets/c7a62648-9f95-46ad-969f-4cd89bf8b9ef" width="700" />

---

### 🎥 **Video Calls**
Engage in real-time one-on-one video conversations using **Stream Video SDK**.  
<img src="https://github.com/user-attachments/assets/0e53d348-adeb-4548-b2cb-170c01d10487" width="700" />

---

### 🔍 **Friend Discovery**
Find peers based on topics of interest and support preferences.

---

### 🎨 **Theme Customization**
Choose from **30+ themes** to personalize your experience.

---

### 📱 **Responsive Design**
Optimized for all devices — desktop, tablet, and mobile.

---

## 🚀 **Tech Stack**

### 🖥️ **Frontend**
- **React 19** – UI library  
- **React Router** – Navigation  
- **TanStack Query** – Data fetching & caching  
- **Zustand** – State management  
- **Stream Chat React** – Chat interface  
- **Stream Video SDK** – Video calling  
- **Tailwind CSS + DaisyUI** – Styling  
- **Lucide React** – Icons  
- **React Hot Toast** – Notifications  
- **Axios** – API communication  

---

### ⚙️ **Backend**
- **Node.js & Express** – Server framework  
- **MongoDB & Mongoose** – Database  
- **JWT & bcryptjs** – Authentication  
- **Stream Chat** – Messaging backend  
- **Cookie Parser** – Cookie handling  
- **CORS** – Cross-origin setup  
- **dotenv** – Environment configuration  

---

## 🧩 **Prerequisites**
- Node.js **v16+**  
- MongoDB (**Local or Atlas**)  
- Stream.io Account (for Chat & Video)

---

## 🛠️ **Installation & Setup**

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/RatneshVaibhav/PikoChat.git
cd PikoChat
```

---

### 2️⃣ **Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file inside the `/backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

---

### 3️⃣ **Frontend Setup**
```bash
cd frontend
npm install
```

Create a `.env` file inside the `/frontend` directory:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🏃 **Running the Application**

### 🧑‍💻 **Development Mode**

**Backend:**
```bash
cd backend
npm run dev
```
Runs at → [http://localhost:3000](http://localhost:3000)

---

**Frontend:**
```bash
cd frontend
npm run dev
```
Runs at → [http://localhost:5173](http://localhost:5173)

---

### 🚢 **Production Build**
```bash
npm run build
npm start
```

---

## 📁 **Project Structure**
```bash
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
│   │   ├── lib/              # API utilities
│   │   ├── store/            # Zustand store
│   │   ├── constants/        # App constants
│   │   └── main.jsx          # Entry point
│   └── package.json
└── package.json
```

---

## 🔑 **Core Functionalities**

### 🔐 **Authentication Flow**
- JWT stored in **HTTP-only cookies**  
- Protected routes verified on each request  
- Onboarding required before accessing main features  

### 🧑‍🤝‍🧑 **Friend System**
- Discover users based on support topics  
- Send / Accept / Decline friend requests  
- Manage your friends list  

### 💬 **Chat & 🎥 Video**
- Real-time messaging with **Stream Chat**  
- One-on-one video calls via **Stream Video SDK**  
- Persistent chat history and call integration  

Examples include:  
- Learn new languages  
- Make online friends  
- Loneliness & isolation  
- Depression support  
- Global interaction  

### 🎨 **Themes**
PikoChat offers **30+ DaisyUI themes**, including:  
> Light, Dark, Cupcake, Forest, Dracula, Nord, Cyberpunk, and more!

### 🔒 **Security**
- Password hashing with **bcryptjs**  
- **HTTP-only JWT cookies**  
- **CORS protection**  
- **Input validation & Protected API routes**

---

## 📡 **API Endpoints**

### 🧾 **Authentication**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | Logout user |
| POST | `/api/auth/onboarding` | Complete profile onboarding |
| GET  | `/api/auth/me` | Get current user |

---

### 👥 **Users**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/users` | Get recommended users |
| GET | `/api/users/friends` | Get friend list |
| POST | `/api/users/friend-request/:id` | Send friend request |
| PUT | `/api/users/friend-request/:id/accept` | Accept friend request |
| GET | `/api/users/friend-requests` | Get incoming requests |
| GET | `/api/users/outgoing-friend-requests` | Get outgoing requests |

---

### 💬 **Chat**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/chat/token` | Generate Stream chat token |

---

## 💡 **What I Learned**

### 🧠 **Technical Skills**
**Frontend:**
- Dynamic UI with React Hooks  
- Routing using React Router  
- State management with Zustand  
- Responsive design using Tailwind CSS  
- Data fetching with TanStack Query  

**Backend:**
- RESTful APIs using Express  
- JWT authentication & middleware  
- MongoDB CRUD operations with Mongoose  
- Stream Chat & Video SDK integration  

**Full-Stack Integration:**
- Frontend ↔ Backend communication via Axios  
- API error handling and environment setup  
- Secure data flow and authentication  

---

### 🧩 **Development Practices**
- Version control with Git  
- Debugging routing and API issues  
- Organized code architecture  
- Efficient feature delivery (3-day MVP build)

---

### 🌟 **Soft Skills**
- **Problem-Solving:** Debugging API and routing issues  
- **Adaptability:** Evolved from language exchange → peer-support model  
- **User-Centric Design:** Simple and meaningful UI  
- **Time Management:** Delivered core features efficiently  

---

## ❤️ **Acknowledgments**
- **Stream.io** for Chat & Video SDK  
- **DaisyUI** & **TailwindCSS** for styling  
- **Scaler School of Technology** for project guidance  

---

### 📜 **License**
This project is licensed under the **MIT License** — feel free to use and modify with attribution.

---

> _Built with ❤️ by [Ratnesh Vaibhav](https://github.com/RatneshVaibhav)_
