const express = require('express');
const router = express.Router();
const {requireRoles} = require('../middleware/role.middleware')
const {authenticateToken} = require('../middleware/auth.middleware')
const {createPost, getposts, getPostById, deletePost, updatePost, getPostsBySlug, getPostsByCategory} = require('../controllers/post.controller');

//only admin and editor can access these routes
router.post('/', authenticateToken, requireRoles('admin', 'editor' ), createPost);
router.delete('/:id', authenticateToken, requireRoles('admin', 'editor' ), deletePost);
router.put('/:id', authenticateToken, requireRoles('admin', 'editor' ), updatePost);

//any one can access this route
router.get('/', getposts);
router.get('/slug/:slug', getPostsBySlug);
router.get('/category/:cat', getPostsByCategory);
router.get('/:id', getPostById);


module.exports = router
