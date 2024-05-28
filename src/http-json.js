const http = require('http');

const server = http.createServer((req,res) => {
    const superHero = {
        name: "Tony Stark",
        character: "Iron Man"
    };

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(superHero))
});


server.listen(3000, ()=>{
    console.log("listening on 3000")
});