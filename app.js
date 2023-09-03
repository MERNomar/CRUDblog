const express = require('express')
let app = express()

app.set('view engine' , 'ejs')
app.use(express.static(__dirname + '/public'));


let blogs = [
    {blog : "how to create express app" , snippet : "search google you dork"},
    {blog : "how to create mongodb database" , snippet : "just search google !!"},
    {blog : "now to create react app" , snippet : "just write npm create react app dumpass !"}
]

app.listen(3000 , () => {
    console.log("listening in http://localhost:3000")
})

app.get('/' , (req , res) => {
    res.render('index' , {blogs})
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