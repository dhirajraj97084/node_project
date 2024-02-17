const express=require('express');
const app=express();
const path=require('path');
const port=8085;

const pathdata=path.join(__dirname,"../public/html");
app.use(express.static(pathdata));


app.get('/' ,(req,res)=>{
    res.send('welcome to my home page');
})
app.get('/about' ,(req,res)=>{
    res.send('welcome to my about page');
})
app.get('/weather' ,(req,res)=>{
    res.send('welcome to my weather page');
})
app.get('*' ,(req,res)=>{
    res.send(' 404 error page oops:');
})

app.listen(port,()=>{
    console.log(`your application successfully run local host${port}`);
})