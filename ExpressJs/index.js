const express = require('express')
const app = express()
const PORT = 8000


app.get('/', (req,res) =>{
    res.send("Hello ExpressJs Server");
})


app.listen(PORT, () => console.log("Server Listeing On Port Number "+PORT))