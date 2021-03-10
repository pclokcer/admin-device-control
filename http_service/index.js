const http = require('http');
require('dotenv').config();
const app = require("./request");

const port = process.env.API_PORT;

const server = http.createServer(app);

server.listen(88);

console.log("Admin is Working!\nListening Port " + port);