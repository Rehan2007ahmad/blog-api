const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

exports.authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded
        console.log('User authenticated:', req.user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}