require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter URL')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please give your data in input<h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})