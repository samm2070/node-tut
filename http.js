const http=require('http');

const server= http.createServer((req,res)=>{

    if(req.url==="/about"){
        res.end("about page")
    }
    if(req.url==="/"){
        res.end("home page")
    }



res.end()

})

server.listen(5000)