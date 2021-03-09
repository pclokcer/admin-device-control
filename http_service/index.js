const http = require('http');
require('dotenv').config();
const app = require("./request");

const port = process.env.API_PORT;

const server = http.createServer(app);

server.listen(80);

console.log("API is Working!\nListening Port " + port);