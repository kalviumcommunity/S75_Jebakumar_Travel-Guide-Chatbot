# 🌍 City Guide Chatbot (Trip Planner)

An AI-powered **City Guide & Trip Planner** that helps users discover places, plan itineraries, and access live information like weather, events, and maps.  

Built with **Node.js, Express, MongoDB, Gemini API, and Vector Databases**, this project demonstrates modern **AI + Web Development** practices with a focus on scalability and real-world usability.

---

## ✨ Features

- 🏙️ **City Information Search (RAG)** → Retrieve knowledge about cities from a vector database.  
- 🗓️ **Personalized Itineraries** → Generate structured day-wise trip plans in JSON format.  
- ☁️ **Live Data Integration** → Fetch weather, maps, and events dynamically through function calls.  
- 🧑‍🤝‍🧑 **Multi-City Support** → Plan trips across multiple cities in one go.  
- 💾 **User History** → Save, view, and manage past itineraries and favorite places.  
- ⚡ **Scalable API** → Built with modular architecture and RESTful best practices.  

---

## 🏗️ Architecture

The system follows a **modular service-oriented architecture**:

1. **Frontend (React)** → User interacts with chatbot UI or trip planner form.  
2. **Backend (Node.js + Express)** → Handles API requests, integrates AI models, manages user sessions.  
3. **AI Layer (Gemini API)** → Generates structured outputs, itineraries, and answers user queries.  
4. **Vector Database (Pinecone / Weaviate / FAISS)** → Stores city embeddings for semantic search (RAG).  
5. **External APIs**  
   - **Google Maps API** → Location details & navigation  
   - **OpenWeather API** → Real-time weather  
   - **Ticketmaster API** → Upcoming events  
6. **Database (MongoDB)** → Stores user profiles, saved trips, itineraries.  

---

## 🛠️ Tech Stack

- **Backend** → Node.js, Express  
- **Database** → MongoDB  
- **AI Model** → Gemini API (for text generation & reasoning)  
- **Vector DB** → Pinecone / FAISS / Weaviate  
- **External APIs** → Google Maps, OpenWeather, Ticketmaster  
- **Frontend** → React 

---

## 🚀 Roadmap

- [ ] Phase 1 → Core backend setup with Express + MongoDB  
- [ ] Phase 2 → Integrate Gemini API with structured output (JSON itineraries)  
- [ ] Phase 3 → Add function calling for weather, events, and maps  
- [ ] Phase 4 → RAG integration with embeddings + vector DB  
- [ ] Phase 5 → User personalization & multi-city support  
- [ ] Phase 6 → Frontend integration and polish  

---

## ⚙️ Setup Instructions

1. **Clone the repository**  
   git clone https://github.com/your-username/city-guide-chatbot.git
   cd city-guide-chatbot

2. **Install dependencies**
    npm install

3. **Run the development server**
    npm run dev

## 🤝 Contributing

Contributions are welcome! 🎉
Please fork this repo, create a branch, and open a Pull Request.

Whether it’s bug fixes, feature requests, or documentation improvements — all PRs are appreciated.

## 👨‍💻 Author

**Jebakumar S**  
AI & Full-Stack Developer | Building scalable AI-driven applications  
