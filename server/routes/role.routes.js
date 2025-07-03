const express = require('express'); 
const router = express.Router();
const {requireRoles} = require('../middleware/role.middleware')
const {authenticateToken} = require('../middleware/auth.middleware')

router.get('/admin', authenticateToken, requireRoles('admin'), (req, res) => {
    res.status(200).json({
        message: 'Welcome Admin'
    });
});

router.get('/editor', authenticateToken, requireRoles('admin', 'editor' ), (req, res) => {
    res.status(200).json({
        message: 'Welcome Admin  or Editor'
    });
});

router.get('/user', authenticateToken, requireRoles('admin', 'editor', 'user'), (req, res) => {
    res.status(200).json({
        message: 'Welcome Admin or Editor or User'
    });
});

module.exports = router