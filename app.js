const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
// const { City } = require('./models/city');
const port = 3000;

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

// food Schema
const citySchema = new Schema({
    name: String, // String is shorthand for {type: String}
    food: [{ name: String, price: Number }],
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const City = mongoose.model('City', citySchema);

// City.insertMany([
//     { name: 'Wuhan', food: [{ name: 'noddles', price: 15 }, { name: 'macaroni', price: 10 }] },
//     { name: 'San Diego', food: [{ name: 'something', price: 25 }, { name: 'rice', price: 20 }] }
// ]);

// const wuhan = new City();
// wuhan.save();

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(express.static(__dirname));

// to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    res.render('results')
})

app.post('/search', async (req, res) => {
    const name = req.body.city;
    const city = await City.findOne({ name });
    res.redirect(`/search/${city.id}`);
})

app.get('/search/:id', async (req, res) => {
    const city = await City.findById(req.params.id);
    res.render('results', { city })
})

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`)
})