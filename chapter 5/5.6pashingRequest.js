//simple node.js server
const http = require ("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

const server = http.createServer( (req , res) =>{
    console.log(req.url, req.method);
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
        return res.end();

    } else if ( req.method=="POST"&&  req.url.toLowerCase()==="/submit-details"  ){
        const body = [];
        req.on('data' , chunk =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end' ,() =>{
          const fullbody = Buffer.concat(body).toString();
          console.log(fullbody);
          const params = new URLSearchParams(fullbody);
         /* const bodyObject = {};
         /* for ( const [key , val] of params.entries()){
            bodyObject[key] = val ;
          }; */
          const bodyObject = Object.fromEntries(params);
          console.log(bodyObject);
          fs.writeFileSync("user.txt" , JSON.stringify(bodyObject) );
        });

    res.statusCode=302;
    res.setHeader('location','/');
    return res(end);
    }

        res.setHeader('content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> my first page</title></head>');
        res.write('<body><h1> hey! I am gulab hussain </h1></body>');
        res.write('</html>');
        res.end();
    
});

const PORT=3007
server.listen(PORT , () =>{
console.log(`server Running on Address http://localhost:${PORT}`);
});