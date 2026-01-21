
const fs = require("fs");

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to home page</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write("<input type='text' name='Username' placeholder='Enter Your Name'><br><br>");
        res.write('<label for="male">Gender</label><br><br>');
        res.write("<input type='radio' id='male' name='gender' value='male'>");
        res.write('<label for="male">Male</label>');
        res.write("<input type='radio' id='female' name='gender' value='female'>");
        res.write('<label for="female">Female</label><br><br>');
        res.write("<button type='submit'>Submit</button>");
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    } else if (req.method === "POST" && req.url.toLowerCase() === "/submit-details") {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const fullbody = Buffer.concat(body).toString();
            console.log(fullbody);

            const params = new URLSearchParams(fullbody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);

            fs.writeFileSync("user-Details.txt", JSON.stringify(bodyObject) , error =>{
                console.log('data return sucessfully');
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    };

    // fallback route
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hey! I am Gulab Hussain</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = userRequestHandler;
module.exports.extra = "Extra";