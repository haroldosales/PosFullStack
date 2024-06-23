const http  = require('http');
const { hostname } = require('os');


const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(`{"user:" "Harold"}`);
})



const htosname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
     console.log(' no ar');
})