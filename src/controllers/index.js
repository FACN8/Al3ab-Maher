const express = require('express');
const router = express.Router();

const home = require('./home.js');
const error = require('./error.js');
const game = require('./game.js');
const authenticate = require('./authenticate.js');
//const middlewares = require('../middlewares/index.js');

router.get('/', /*middlewares.authCheck,*/ home.get);
router.get('/game', /*middlewares.authCheck,*/ game.get);
router.get('/authenticate', authenticate.get);
router.post('/login', authenticate.login);
router.post('/register', authenticate.register);
router.get('/logout', authenticate.logout);
router.use(error.client);
router.use(error.server);

module.exports = router;