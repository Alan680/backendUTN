const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req,res)=>{
    switch (req,url){
        case '/home': () =>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Hello World");
        }
        break;
        default: res.statusCode = 404;
    }
});

server.listen(portHostname)