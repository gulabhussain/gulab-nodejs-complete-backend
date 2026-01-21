const http = require("http");
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

const PORT =3012;
server.listen(PORT , () =>{
    console.log(`Server running on Address http:localhost:${PORT}`);
});