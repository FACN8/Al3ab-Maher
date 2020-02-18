module.exports.get = (req, res) => {
    res.render('home', {
        title: 'Home page',
        signed_in: false
    });
}