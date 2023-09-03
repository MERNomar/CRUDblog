const express = require('express')
let app = express()

app.set('view engine' , 'ejs')


app.listen(8080 , () => {
    console.log("listening in http://localhost:8080")
})

app.get('/' , (req , res) => {
    res.render('index')
})

app.get('/about' , (req , res) => {
    res.sendFile('./about.html' , {root : __dirname})
})

app.get('/404' , (req , res) => {
    res.sendFile('./404.html' , {root : __dirname})
})



app.use( (req , res) => {
    res.status(404).sendFile('./404.html' , {root : __dirname})
})