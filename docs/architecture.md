# System Architecture

## 🏗️ Overview

The University Admission Chatbot follows a modern, decoupled **Layered Architecture**. The frontend and backend are separate concerns, communicating over a RESTful API. This ensures scalability, maintainability, and ease of testing.

## 🧩 Components

### 1. Frontend (Streamlit)
*   **Role**: User Interface.
*   **Tech**: Python, Streamlit.
*   **Responsibility**:
    *   Capture user input.
    *   Manage chat session state.
    *   Allow configuration (API Key, Provider selection) via sidebar.
    *   Display responses and error messages gracefully.

### 2. Backend (FastAPI)
*   **Role**: API Gateway & Business Logic.
*   **Tech**: Python, FastAPI, Uvicorn.
*   **Structure**:
    *   **Routes** (`/routes`): Defines HTTP endpoints (`/chat`, `/health`).
    *   **Services** (`/services`): Contains the business logic, specifically the LLM provider abstraction.
    *   **Schemas** (`/schemas`): Pydantic models for request/response validation.
    *   **Core** (`/core`): Configuration management using `pydantic-settings`.

### 3. LLM Layer (External & Mock)
*   **Role**: Intelligence provider.
*   **Tech**: Requests, Scaledown.ai (External), Mock Implementation (Internal).
*   **Abstraction**:
    *   The `LLMProvider` abstract base class allows hot-swapping between the **Scaledown** API and the **Mock** provider.
    *   This is critical for ensuring the system can be developed and tested even without external connectivity.

## 🔄 Data Flow

1.  **User Input**: User types a message in Streamlit.
2.  **Request**: Streamlit sends a POST request to `http://localhost:8000/api/v1/chat`.
3.  **Validation**: FastAPI validates the payload using `ChatRequest` schema.
4.  **Service Call**: The view function calls `get_llm_service()` to instantiate the selected provider.
5.  **Generation**: The provider sends the prompt to the external API (or mocks it).
6.  **Response**: The result is returned to the frontend and displayed.

## 🐳 Deployment

The application utilizes **Docker** for containerization, ensuring a consistent environment across development and production.
