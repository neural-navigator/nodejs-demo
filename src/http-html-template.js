const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
    const name="satya";
    let html = fs.readFileSync("./src/template.html", "utf-8")
    html = html.replace("{{name}}", name)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html)
});


server.listen(3000, ()=>{
    console.log("listening on 3000")
});