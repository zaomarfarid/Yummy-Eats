const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

// connect to mongoDB using mongooose
mongoose.connect('mongodb://localhost:27017/eats', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// check the database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database connected') });

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
// useless - default
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));

// to parse req.body
app.use(express.urlencoded({ extended: true }));


app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    res.render('results');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})