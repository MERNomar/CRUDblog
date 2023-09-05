const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Blog = require('./models/blog')


const url = "mongodb+srv://omar:omar123@cluster0.pvkokfm.mongodb.net/?retryWrites=true&w=majority"
app.set('view engine' , 'ejs')
app.use(express.static(__dirname + '/public'));

mongoose.connect(url).then(() => {app.listen(3000 , () => {
    console.log("listening in http://localhost:3000")
})})
.catch(err => {console.log(err)})


app.get('/all-blogs' , (req , res) => {
  })


app.get('/' , (req , res) => {
    Blog.find().then(blogs => {
        res.render('index' , {blogs ,title : " | Home"})
    })
})

app.get('/about' , (req , res) => {
    res.render('about',{title : " | About"})
})

app.get('/newblog' , (req , res) => {
    res.render('newblog' , {title : " | new Blog"})
})





app.use( (req , res) => {
    res.status(404).render('404' )
})