const express = require('express');
const router = express.Router();
const { createUser,loginUser , getUser, getAllUsers, deleteUser, updateUser, sendOtp, verifyOtp, changePassword} = require('../controllers/user.controller');
const {authenticateToken} = require('../middleware/auth.middleware')


router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.post('/send-otp', authenticateToken, sendOtp); 
router.post('/verify-otp', authenticateToken, verifyOtp);
router.post('/change-password', authenticateToken, changePassword);
module.exports = router;
