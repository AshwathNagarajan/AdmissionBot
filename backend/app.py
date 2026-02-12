from flask import Flask, request, jsonify
from flask_cors import CORS  # <- import CORS
from openai import OpenAI
import config

app = Flask(__name__)
CORS(app)  # <- enable CORS for all routes

# OpenAI client
client = OpenAI(
    api_key=config.OPENAI_API_KEY,
    base_url=config.OPENAI_BASE_URL
)

messages = []

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "").strip()

    if not user_input:
        return jsonify({"reply": "Please enter a message."})

    messages.append({
        "role": "user",
        "content": user_input
    })

    response = client.responses.create(
        model=config.OPENAI_MODEL,
        input=messages,
    )

    assistant_message = response.output_text
    messages.extend(response.output)

    return jsonify({"reply": assistant_message})

@app.route("/")
def home():
    return "University Admission Chatbot API is running."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
