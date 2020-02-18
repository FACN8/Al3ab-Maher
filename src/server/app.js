const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const controllers = require('../controllers/index.js');

require('dotenv').config();

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
        partialsDir: path.join(__dirname, '..', 'views', 'partials'),
        defaultLayout: 'main'
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/stylesheets', express.static(path.join(__dirname, '..', 'stylesheets')));
app.use(cookieParser());
app.set('port', process.env.PORT || 3000);

app.use(controllers);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));