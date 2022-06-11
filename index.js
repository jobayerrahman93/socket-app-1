const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection",(socket)=>{
    console.log('new user connected');
    
    // setTimeout(() => {
    
    //     socket.send('you are connected to the server')
        
    // }, 4000);

    // level2

    // continously data send
    // setInterval(() => {

    //     let date = new Date();
    //    let time = date.getTime();
    
    //     socket.send(time)
        
    // }, 500);

    // level3 get data from client

    socket.on('message',(msg)=>{
        console.log(msg)
    });





    socket.on("disconnect",()=>{
        console.log('user disconnected')
    })
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

httpServer.listen(5000,()=>{
    console.log(
        `server 5000 is running`
    )
})
