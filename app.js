document.addEventListener("DOMContentLoaded", () => {
  const loginScreen = document.getElementById("login-screen");
  const chatScreen = document.getElementById("chat-screen");
  const loginBtn = document.getElementById("login-btn");
  const sendBtn = document.getElementById("send-btn");
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message-input");
  const messagesContainer = document.getElementById("messages");

  let username = null;

  loginBtn.addEventListener("click", () => {
    const input = usernameInput.value.trim();
    if (input === "admin") {
      const adminPass = prompt("Podaj hasło administratora:");
      if (adminPass === "skubaniec997") {
        alert("Zalogowano jako administrator!");
        username = "Administrator";
        loginScreen.classList.add("hidden");
        chatScreen.classList.remove("hidden");
      } else {
        alert("Nieprawidłowe hasło!");
      }
    } else if (input) {
      username = input;
      loginScreen.classList.add("hidden");
      chatScreen.classList.remove("hidden");
    } else {
      alert("Podaj nazwę użytkownika!");
    }
  });

  sendBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
      const messageElement = document.createElement("div");
      messageElement.textContent = `${username}: ${message}`;
      messagesContainer.appendChild(messageElement);
      messageInput.value = "";
    }
  });
});
