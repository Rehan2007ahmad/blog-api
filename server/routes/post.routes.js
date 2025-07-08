const express = require('express');
const router = express.Router();
const upload = require('../config/multer')
const {requireRoles} = require('../middleware/role.middleware')
const {authenticateToken} = require('../middleware/auth.middleware')
const {createPost, getposts, getPostById, deletePost, updatePost, getPostsBySlug} = require('../controllers/post.controller');

//only admin and editor can access these routes
// router.post('/', upload.array('images', 10), authenticateToken, requireRoles('admin', 'editor' ), createPost);
// router.delete('/:id', authenticateToken, requireRoles('admin', 'editor' ), deletePost);
// router.put('/:id', upload.array('images', 10), authenticateToken, requireRoles('admin', 'editor' ), updatePost);

//any one can access this route
router.get('/', getposts);
router.get('/:id', getPostById);
router.get('/slug/:slug', getPostsBySlug);

//for dev
router.post('/', upload.array('images', 10), createPost);
router.delete('/:id', deletePost);
router.put('/:id',updatePost);

module.exports = router