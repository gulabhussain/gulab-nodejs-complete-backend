const { url } = require('inspector');
const {sumRequestHandler} = require('../sum');

const requestHandler = (req , res ) => {
console.log(req.url , req.method);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
               <head><title>Practice set</title></head>
               <body>
                <h1> Welcome to calculater </h1>
                <a href="/calculater">Go To calculater </a>
                </body>
                </html>
               `);
               return res.end();
    } else if ( req.url.toLowerCase() === "/calculater"){
         res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
               <head><title>Practice set</title></head>
               <body>
                <h1>here is the calculater</h1>
                <form action="/calculate-result" method="POST">
                <input type="text" placeholder="first-num" name="first" />
                <input type="text" placeholder="second-num" name="second" />
                <input type="submit" value="sum" />
                </form>
                </body>
                </html>
               `);
               return res.end();
    }   else if ( req.url.toLowerCase()=== "/calculate-result" && req.method==='POST'){
       return sumRequestHandler(req ,res );
         
    }
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
               <head><title>Practice set</title></head>
               <body>
                <h1> 404 Page Does not Exist </h1>
                <a href="/">Go To Home </a>
                </body>
                </html>

               `);
               return res.end();
};

exports.requestHandler = requestHandler;
