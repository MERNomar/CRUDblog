const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = "mongodb+srv://omar:omar123@cluster0.pvkokfm.mongodb.net/?retryWrites=true&w=majority"
const blogsRouter = require('./routes/blog-routs')

app.set('view engine' , 'ejs')

app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'));
app.use('/blogs' ,blogsRouter)

mongoose.connect(url).then(() => {app.listen(3000 , () => {
    console.log("listening in http://localhost:3000")
})})
.catch(err => {console.log(err)})

app.get('/',(req , res) => {
    res.redirect('/blogs')
})

app.use((req, res) => {
    res.render('404' , {title : " | 404"});
});

