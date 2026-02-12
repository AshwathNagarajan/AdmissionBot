# Methodology

## 🎯 Design Philosophy

The development of this chatbot was guided by three principles: **Reliability**, **Modularity**, and **Simplicity**.

### 1. Reliability First
We anticipated that external dependencies (like LLM APIs) might fail.
*   **Solution**: We implemented the **Mock Provider**. This ensures that development does not halt due to external factors (DNS issues, rate limits, or downtime).
*   **Solution**: We reverted complex SDK integrations when they proved unstable, preferring the stability of standard HTTP requests.

### 2. Modularity & Abstraction
We avoided tight coupling between the application logic and the LLM provider.
*   **Pattern**: We used the **Strategy Pattern** for LLM services (`LLMProvider` interface).
*   **Benefit**: Adding a new provider (e.g., OpenAI or Anthropic) requires creating a single class, without modifying the API routes or frontend code.

### 3. Iterative Development
The project evolved through rapid feedback cycles:
1.  **MVP**: Basic FastAPI + Streamlit setup.
2.  **Integration**: Added Scaledown.ai connecting logic.
3.  **Refinement**: Attempted SDK integration -> identified failure -> rolled back to `requests`.
4.  **Hardening**: Added Mock provider to handle production edge cases (network isolation).

## 🛠️ Development Workflow

1.  **Task Tracking**: All changes were tracked via `task.md`.
2.  **Implementation Implementation**: Changes were planned in `implementation_plan.md` before coding.
3.  **Verification**: Automated verification using `api_test.py` was run after every major change.
4.  **Documentation**: Continuous documentation updates to reflect the "source of truth".
