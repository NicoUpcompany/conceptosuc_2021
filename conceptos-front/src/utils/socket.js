import io from "socket.io-client";
const Socket = io("http://localhost:8080/");
// const Socket = io("https://cms.upwebinar.cl/");
// const Socket = io("https://conceptosuc2021.upwebinar.cl/");

export default Socket;
