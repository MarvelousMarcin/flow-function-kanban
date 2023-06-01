import { io } from "socket.io-client";

// please note that the types are reversed
const socket = io(`${process.env.NEXT_PUBLIC_URL}`);

export default socket;
