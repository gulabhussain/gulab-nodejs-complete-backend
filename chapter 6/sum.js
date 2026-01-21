const sumRequestHandler = ( req , res ) => {
   console.log(" 1.In Sum Request Handler" , req.url);
   const body = [];
   let result ; 
   req.on( 'data' , chunk => body.push(chunk));
   req.on('end' , () => {
    console.log("2. end event came")
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr)
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) +  Number(bodyObj.second);
    console.log(result);
   });

req.on( 'data' , chunk => {
    body.push(chunk);
    console.log(" 3. chunk came ")
});

    console.log("4.sending the respond");
   res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
               <head><title>Practice set</title></head>
               <body>
                    <h1> Your Sum is ${result}</h1>
                </body>
            </html>

        `);
 return res.end();
}

exports.sumRequestHandler=sumRequestHandler;