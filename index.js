const http = require('http');
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();

   const log = `${Date.now()}: ${req.url} New request received\n`;
   const myUrl = url.parse(req.url, true ); // second parameter is to parse the query params also into an object
   console.log(myUrl);

    fs.appendFile('logs.txt',log , (err, result) => {

        switch(myUrl.pathname){
            case '/' : res.end('you are in home Page');
            break;
            case '/about' :
                const username= myUrl.query.myName;
                res.end(`Hi! I am ${username}`);
            break 
            default : res.end("not found sorry");
        }
    })
    });

myServer.listen(8000, ()=> console.log('Server started'))
