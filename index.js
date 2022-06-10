const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection",(socket)=>{
    console.log('new user connected');
    
    socket.on("disconnect",()=>{
        console.log('user disconnected')
    })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

httpServer.listen(5000,()=>{
    console.log(
        `server 5000 is running`
    )
})
