const express = require('express');
const app = express();
const path = require('path')

app.listen(3030,()=>{
    console.log("Servidor corriendo en el puerto 3030 ");
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
});

app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contact.html"))
});

app.use(express.static("public"));