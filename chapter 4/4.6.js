//simple node.js server
const http = require ("http");
const fs = require("fs");

const server = http.createServer( (req , res) =>{
    console.log(req.url, req.method , req.headers);
    if (req.url==='/'){
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> Welcome to home page </h1></body>');
        res.write('<h1>Welcome to home page ');
        res.write('<form action="/submit-details" method="POST">');
        res.write("<input type='text' name='Username' placeholder='Enter Your Name'><br><br>");
        res.write('<label for="gender"> Gender </label> <br> <br>'); 
        res.write("<input type='radio'id='male' name='gender' value='male' >");
        res.write('<label for="gender"> Male</label>'); 
        res.write("<input type='radio'id='female' name='gender' value='female' >");
        res.write('<label for="gender"> Female</label> <br><br>');
        res.write("<button type='submit'> Submit </button>");
        res.write('</form>'); 
        res.write('</html>');
        res.end();
        return res.end();

    } else if (req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
    fs.writeFileSync("user.txt",'Gulab Hussain' );
    res.statusCode=302;
    res.setHeader('location','/');
    }

        res.setHeader('conrent-type','text/html');
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> hey! I am gulab hussain </h2></body>');
        res.write('</html>');
        res.end();
    
});

const PORT=3006
server.listen(PORT , () =>{
console.log(`server Running on Address http://localhost:${PORT}`);
});