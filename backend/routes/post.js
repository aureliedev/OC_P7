/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const postController = require("../controllers/post");

/* ROUTES */
router.get('/', postController.getPost);
//router.post('/', postController.createPost);
//router.put('/:id', postController.updatePost);
//router.delete('/:id', postController.deletePost);

/* EXPORT */ 
module.exports = router;