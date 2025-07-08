const express = require('express');
const router = express.Router();    
const {requireRoles} = require('../middleware/role.middleware')
const {authenticateToken} = require('../middleware/auth.middleware')
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory, getCategoryByName} = require('../controllers/category.controller');

//only admin and editor can access these routes
// router.post('/create', authenticateToken, requireRoles('admin', 'editor' ), createCategory);
// router.put('/:id', authenticateToken, requireRoles('admin', 'editor' ), updateCategory);
// router.delete('/:id', authenticateToken, requireRoles('admin', 'editor' ), deleteCategory);


//anyone can access thses routes
router.get('/by-name/:name', getCategoryByName);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);


//for dev
router.post('/create',createCategory);
router.put('/:id',  updateCategory);
router.delete('/:id', deleteCategory);
module.exports = router