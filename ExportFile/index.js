
const http = require('http');


const server = http.createServer(function(req,res) {
    if(req.url == '/'){
        res.write("Hello From Home Page");
        res.end()
    }else if(req.url == '/about' || req.url == '/About'){
        res.write("Hello From About Page");
        res.end()
    }else if(req.url == '/contact' || req.url == '/Contact'){
        res.write("Hello From Contact Page");
        res.end()
    }else{
        res.write("<h1>Error 404.</h1>")
        res.end();
    }
})




server.listen(7000, () =>{
    console.log("Server Listening On Port Number 7000")
})
