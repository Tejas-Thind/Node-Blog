const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname  });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname  });
});