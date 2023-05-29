import { io, Socket } from "socket.io-client";

// please note that the types are reversed
const socket = io("http://localhost:8000");

export default socket;
