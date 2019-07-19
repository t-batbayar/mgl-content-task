const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('view options', { delimiter: '?' });

const sequelize = require('./util/database');
const mainMenu = require('./models/mainMenuModel');
const subMenu = require('./models/subMenuModel');
const subSubMenu = require('./models/subSubMenuModel');

const homeRoutes = require('./routes/homeRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(homeRoutes);

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

subMenu.belongsTo(mainMenu, { constraints: true, onDelete: 'CASCADE' });
mainMenu.hasMany(subMenu);

subSubMenu.belongsTo(subMenu, { constraints: true, onDelete: 'CASCADE' });
subMenu.hasMany(subSubMenu);

sequelize
    .sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    });
