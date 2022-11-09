const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-Type","text/html");
    res.end("<h1> This is Manish the best</h1> <p> Information technology engineer!!")
})  

server.listen(port, ()=>{
    console.log('server is listening on port ${port}');
})

