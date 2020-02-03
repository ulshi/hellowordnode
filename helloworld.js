const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World\n');
 });
 server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
 setTimeout(function2, 10000);
 }); 
function function2() {
 // all the stuff you want to happen after that pause
 console.log('After 10 seconds...Hi');
 }
