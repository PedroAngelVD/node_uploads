const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/image.routes'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});