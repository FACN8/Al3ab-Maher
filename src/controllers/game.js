module.exports.get = (req, res) => {
    res.render('game', {
        signed_in: true,
        title: 'Game'
    })
};