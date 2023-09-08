const express = require('express')
const router = express.Router()

const controllers = require('../controllers/blogController')

router.get('/about' , controllers.blog_about )
router.get('/newblog' , controllers.blog_create_get )
router.get('/' , controllers.blog_index)
router.get('/404' , controllers.error_blog)
router.post('/' , controllers.blog_create_post )
router.get('/:id' ,  controllers.blog_details  )
router.delete('/:id' ,controllers.blog_delete)


module.exports = router;