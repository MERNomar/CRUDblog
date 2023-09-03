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
    res.render('about')
})

app.get('/newblog' , (req , res) => {
    res.render('newblog')
})





app.use( (req , res) => {
    res.status(404).render('404' )
})