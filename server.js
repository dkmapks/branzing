const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Obsługa statycznych plików (frontend)
app.use(express.static("public"));

// Obsługa połączeń WebSocket
io.on("connection", (socket) => {
  console.log("Nowe połączenie:", socket.id);

  // Nasłuchiwanie wiadomości od klienta
  socket.on("chat message", (msg) => {
    console.log("Wiadomość:", msg);

    // Wysłanie wiadomości do wszystkich użytkowników
    io.emit("chat message", msg);
  });

  // Rozłączenie użytkownika
  socket.on("disconnect", () => {
    console.log("Użytkownik rozłączony:", socket.id);
  });
});

// Uruchomienie serwera
server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
