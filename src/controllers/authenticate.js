module.exports.get = (req, res) => {
    res.render('authenticate', {
        signed_in: false,
        title: 'Authentication'
    });
};