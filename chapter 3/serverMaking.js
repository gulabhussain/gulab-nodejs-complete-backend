const http = require ("http");

const server = http.createServer( (req , res) =>{
    console.log(req);
});

const PORT=3005
server.listen(PORT , () =>{
console.log(`server Running on Address http://localhost:${PORT}`);
});