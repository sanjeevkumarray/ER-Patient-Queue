const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const patientRoutes = require("./routes/patients");
const logger = require("./middleware/logger");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 20 }));
app.use(logger);
app.use("/patients", patientRoutes);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
});