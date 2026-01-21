//simple node.js server
const http = require ("http");

const server = http.createServer( (req , res) =>{
    console.log(req.url, req.method , req.headers);
    if (req.url==='/'){
        res.setHeader('conrent-type','text/html');
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> Welcome My First page </h2></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url==="/product"){
        res.setHeader('conrent-type','text/html');
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> checkout our product  </h2></body>');
        res.write('</html>');
        return res.end();
    } 
        res.setHeader('conrent-type','text/html');
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> hey! I am gulab hussain </h2></body>');
        res.write('</html>');
        res.end();
    
});

const PORT=3005
server.listen(PORT , () =>{
console.log(`server Running on Address http://localhost:${PORT}`);
});