/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const postController = require("../controllers/post");

/* ROUTES */
router.get('/', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

router.patch('/likepost/:id', postController.likePost);
router.patch('/dislikepost/:id', postController.dislikePost);


/* EXPORT */ 
module.exports = router;