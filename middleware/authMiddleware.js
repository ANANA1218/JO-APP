export const isAdmin = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        return next(); 
    } else {
        return res.status(403).json({
            status: 403,
            message: 'Forbidden: Only admins are allowed to access this resource'
        });
    }
};

export const isPublic = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'public') {
        return next(); 
    } else {
        return res.status(403).json({
            status: 403,
            message: 'Forbidden: Access restricted to users with public role'
        });
    }
};
