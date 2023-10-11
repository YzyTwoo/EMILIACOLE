const express = require('express');
const app = express();
const path = require('path')

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});

app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contact.html"))
});

app.get("/music", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/music.html"))
});

app.use(express.static("public"));

app.listen(3030,()=>{
    console.log("Servidor corriendo en el puerto 3030 ");
});