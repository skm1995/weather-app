const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Szymon Kozłowski',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Szymon Kozłowski',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        forecast: 'It is snowing.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
