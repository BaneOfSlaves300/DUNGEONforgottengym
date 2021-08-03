import Server from "./exchanger.js";

const server = new Server();

server.setApp();
server.routeHome();
server.routeLogin();
server.routeRegistration();
server.listenApp();