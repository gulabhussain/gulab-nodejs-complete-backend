const http = require("http");

const userRequestHandler = require('./user');
/*
const testingSyntax = require('./syntax');

const runtime = require('./runtime');

const logical = require('./logical');

const server = http.createServer((req , res) => {
    console.log(req.url , req.method);
   // testingSyntax();
    //runtime();
    logical();
});
*/

const server = http.createServer(userRequestHandler);


const PORT =3001;
server.listen(PORT , () =>{
    console.log(`Server running on Address http:localhost:${PORT}`);
});