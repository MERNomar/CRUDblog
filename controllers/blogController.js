const Blog = require("../models/blog");

const blog_about = (req, res) => {
  res.render("about", { title: " | About" });
};

const blog_index = (req, res) => {
  Blog.find().then((blogs) => {
    res.render("index", { blogs, title: " | Home" });
  });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((e) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  res.render("newblog", { title: " | new Blog" });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then((result) => {
    res.render("details", { blog: result, title: " | details" });
  }).catch(err => res.status(404).render('404' , {title : " | 404 "}));
  
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then((result) => {
    res.json({ redirect: "/blogs" });
  });
};

const error_blog = (req , res) => {
  res.render('404' , {title : " | page was not found"})
}

module.exports = {blog_about,
    blog_index,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_delete,
    blog_delete,
    error_blog
}