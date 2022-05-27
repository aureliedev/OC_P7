/******************** CONFIGURATION DE USER ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const postController = require("../controllers/post");

/* ROUTES */
//post
router.get('/', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
//likes
router.patch('/likepost/:id', postController.likePost);
router.patch('/dislikepost/:id', postController.dislikePost);
//comment de post
router.patch('/commentpost/:id', postController.commentPost);
router.patch('/updatecommentpost/:id', postController.updateCommentPost);


/* EXPORT */ 
module.exports = router;