const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
    const html = fs.readFileSync("./src/hello.html", "utf-8")
    fs.createReadStream("./src/hello.html").pipe(res);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html)
});


server.listen(3000, ()=>{
    console.log("listening on 3000")
});