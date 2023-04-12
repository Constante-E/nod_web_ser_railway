const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir Contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'pepe',
        titulo: 'node'

    });
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'carlos',
        titulo: 'generico'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'jose',
        titulo: 'elemento'
    });
})

app.listen(port, () => {
    console.log(`Prueba en puerto ${port}`)
})