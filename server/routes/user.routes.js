const express = require('express');
const router = express.Router();
const { createUser,loginUser , getUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user.controller');


router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
module.exports = router;
