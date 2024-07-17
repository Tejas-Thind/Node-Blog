const express = require('express');

// express app
const app = express();

// ergister view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404 page
app.use((req, res) => { // fire for every single request coming in but only if it reaches this point in the code
    res.status(404).render('404');
});