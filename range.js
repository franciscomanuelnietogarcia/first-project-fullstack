module.exports = (req, res, next) => {
    res.header('Content-Range', 'users 0-2/2');
    next();
}