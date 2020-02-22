module.exports.get = (req, res) => {
    res.render('game', {
        signed_in: req.cookies.signed_in,
        title: 'Game'
    })
};
