const express=require("express");
const mongoose= require("mongoose");
const url = 'mongodb://localhost/AlienDBex'
const app=express()
const port=8000;

mongoose.connect(url, {useNewUelParser:true})
const con = mongoose.connection

con.on('open', ()=> {
    console.log('connected...')
})

app.use(express.json())

const alienRouter =require('./routes/aliens')

app.use('/aliens',alienRouter)


app.listen(port,()=>{console.log(`server is listning at port http://localhost:${port}`)});