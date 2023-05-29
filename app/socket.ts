import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:8000";

let socket;

if (URL) {
  socket = io(URL, {
    autoConnect: false,
  });
}

export default socket;
