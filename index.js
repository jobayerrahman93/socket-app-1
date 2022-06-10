const express = require("express");
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})





expressServer.listen(5000,()=>{
    console.log(
        `server 5000 is running`
    )
})
