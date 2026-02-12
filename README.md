# 🎓 University Admission ChatBot (Python)

An intelligent **University Admission ChatBot** built using **FastAPI, Streamlit, and LLM (Scaledown.ai)** to assist students with admission-related queries. This project uses a modern layered architecture suitable for production deployment.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Docker Deployment](#docker-deployment)
- [Testing](#testing)

---

## 📖 Overview

This chatbot allows prospective students to ask questions about university admissions and receives intelligent responses via an LLM. It features a robust FastAPI backend and a user-friendly Streamlit frontend.

---

## ✨ Features

- **LLM Integration**: Abstract support for external providers (Scaledown.ai) and a **Mock Provider** for offline testing.
- **Modern Backend**: FastAPI with Pydantic validation and dependency injection.
- **Interactive Frontend**: Streamlit-based chat interface.
- **Security**: API Key management, basic CORS, and environment validation.
- **Production Ready**: Structure logging, Docker support, and Health checks.

---

## � System Architecture

The project follows a layered architecture:

- **Frontend**: Streamlit App (`frontend/streamlit_app.py`) - Handles user interaction.
- **Backend API**: FastAPI (`backend/app/main.py`) - API Gateway.
- **Service Layer**: (`backend/app/services/llm.py`) - Business logic and LLM communication.
- **Schemas**: (`backend/app/schemas/`) - Data validation using Pydantic.

---

## 📁 Project Structure

```
AdmissionChatBot/
├── backend/
│   ├── app/
│   │   ├── core/       # Configuration
│   │   ├── routes/     # API Endpoints
│   │   ├── services/   # Business Logic (LLM)
│   │   ├── schemas/    # Pydantic Models
│   │   └── main.py     # Application Entry
├── frontend/
│   └── streamlit_app.py # Chat Interface
├── Dockerfile
├── requirements.txt
├── .env.example
├── api_test.py
└── README.md
```

---

## ⚙ Installation & Setup

### 1️⃣ Clone and Configure
```bash
git clone https://github.com/yourusername/university-admission-chatbot.git
cd AdmissionChatBot

# Create virtual environment
python -m venv venv
# Activate: venv\Scripts\activate (Windows) or source venv/bin/activate (Linux/Mac)

# Install dependencies
pip install -r requirements.txt
```

### 2️⃣ Environment Variables
Copy `.env.example` to `.env` (optional for local dev, or provide API key at runtime).
```bash
cp .env.example .env
```
Update `SCALEDOWN_API_KEY` in `.env` if you have one.

---

## ▶ Usage

### 1. Run Backend
```bash
# Run from the root directory
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```
API Documentation available at: `http://localhost:8000/docs`

### 2. Run Frontend
Open a new terminal:
```bash
streamlit run frontend/streamlit_app.py
```
Access the chat UI at: `http://localhost:8501`

---

## � Testing

### API Tests
Run the included test script to verify backend connectivity (ensure backend is running first):
```bash
python api_test.py
```

### Manual Testing
1. Go to Streamlit UI.
2. Enter your **Scaledown.ai API Key** in the sidebar (if not in `.env`).
3. Ask a question!

---

## � Docker Deployment

Build and run the backend container:

```bash
docker build -t admission-chatbot-backend .
docker run -p 8000:8000 admission-chatbot-backend
```

---

## 👨‍💻 Contributors

- **Ashwath Nagarajan**
