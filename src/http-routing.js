const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("Home page")
    } if (req.url === "/api") {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("api page")
    }
});

server.listen(3000, () => {
    console.log("server running on 3000");
});