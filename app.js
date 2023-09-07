const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Blog = require('./models/blog')
app.use(express.urlencoded({extended : true}))


const url = "mongodb+srv://omar:omar123@cluster0.pvkokfm.mongodb.net/?retryWrites=true&w=majority"
app.set('view engine' , 'ejs')
app.use(express.static(__dirname + '/public'));

mongoose.connect(url).then(() => {app.listen(3000 , () => {
    console.log("listening in http://localhost:3000")
})})
.catch(err => {console.log(err)})

app.get('/' , (req , res) =>{
    res.redirect('/blogs')
})

app.get('/blogs/thing' , (req , res) => {
    Blog.find().then(blogs => {
        res.render('index' , {blogs ,title : " | Home"})
    })
})


app.get('/blogs' , (req , res) => {
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

app.get('/blogs/:id' , (req , res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details' , {blog : result , title : " | details" })
    })
    
   
})



app.post('/blogs' , (req , res) =>{
    const blog = new Blog(req.body)
    blog.save()
    .then((e) => {res.redirect('/')})
    .catch(err => {console.log(err)})
})

app.delete('/blogs/:id' , (req , res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) =>{
        res.json({redirect : '/blogs' })
    } )
   

})

app.use(function(req, res){
    res.render('404' , {title : " | 404"});
});





app.use( (req , res) => {
    res.status(404).render('404' )
})