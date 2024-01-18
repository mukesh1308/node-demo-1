const http=require("http");
const fs=require("fs");
const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){ 
        // console.log(req.headers);
        res.writeHead(200,{'content-type': 'image/x-icon'});
        let strem=fs.createReadStream("./node-js-black-icon.png").pipe(res);
        strem.on("finish",()=>{
            res.end();
        })
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<fieldset><b>hi user, Your accessing the following URL</b><br><p>URL: ${req.headers.host}${req.url}<br>Method: ${req.method}</p></fieldset>`);
    res.end();
});

server.listen(port,()=>{
    console.log(`listening to port ${port}`);
})