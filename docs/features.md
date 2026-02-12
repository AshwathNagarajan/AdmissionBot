# Features

## ✨ Key Capabilities

### 1. Intelligent Chat Interface
*   **Natural Language Processing**: Understands queries about admissions, courses, and deadlines even if phrased informally.
*   **Contextual Responses**: (Planned) Can maintain context over a conversation session.
*   **Instant Feedback**: Provides loading states ("Thinking...") while processing requests.

### 2. Multi-Provider Support
*   **Scaledown.ai Integration**: Connects to the powerful Scaledown LLM for high-quality responses.
*   **Offline Mock Mode**: Includes a robust "Mock Provider" for testing and demonstration when internet access or API keys are unavailable.
*   **Dynamic Switching**: Users can switch providers instantly from the sidebar without restarting the server.

### 3. Secure Configuration
*   **API Key Management**: API keys are never hardcoded. They can be injected via:
    *   Environment Variables (`.env`)
    *   Runtime Input (Frontend Sidebar)
*   **Environment Isolation**: Separate `.env` file for local secrets, with `.env.example` for version control.

### 4. Production Readiness
*   **Health Checks**: Dedicated `/health` endpoint for uptime monitoring.
*   **Structured Logging**: Detailed backend logs for debugging interactions.
*   **Dockerized**: Ready for container orchestration platforms.
*   **Robust Error Handling**: Gracefully handles timeouts, DNS errors, and API rejections with user-friendly messages.
