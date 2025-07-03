exports.requireRoles = (...roles)=>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied, You must be admin or editor to access' });
        }
        next();
    }
}