const express=require('express');
const fs=require('fs');
const path=require('path');

const app=express();



app.get('/video',(req,res)=>{
    res.sendFile('/assets/simple.mp4',{root:__dirname});
})

app.listen(5600,()=>{
    console.log("server is runnng");
});

