const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

function appendMessage(role, text) {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message", role);

    const p = document.createElement("p");
    p.textContent = text;
    messageEl.appendChild(p);

    chatBody.appendChild(messageEl);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Send message to backend
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        appendMessage("assistant", data.reply);
    } catch (err) {
        appendMessage("assistant", "⚠️ Could not connect to server.");
        console.error(err);
    }
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});
