/******************** CONFIGURATION DE POSTS ROUTES ********************/
/* IMPORT */
const router = require("express").Router();
const postController = require("../controllers/post");

const multer = require("multer");
const upload = multer();

/* ROUTES */
//post
router.get('/', postController.getPost);
router.post('/', upload.single("file"), postController.createPost); //post avec image
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

//likes
router.patch('/likepost/:id', postController.likePost);
router.patch('/dislikepost/:id', postController.dislikePost);

//comment de post
router.patch('/commentpost/:id', postController.commentPost);
router.patch('/updatecommentpost/:id', postController.updateCommentPost);
router.patch('/deletecommentpost/:id', postController.deleteCommentPost);

/* EXPORT */ 
module.exports = router;