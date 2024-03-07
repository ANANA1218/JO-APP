export function requireAuth(req, res, next) {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login'); // Redirect to login page if not authenticated
    }
}

export function requireAdmin(req, res, next) {
    // Check if user is authenticated and is admin
    if (req.isAuthenticated() && req.user.role === 'admin') {
        return next();
    } else {
        res.redirect('/public'); // Redirect to public page if not admin
    }
}
