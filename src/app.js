const path = require('path')
const express = require('express')
const { response } = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express() 
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Shir the great'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
    title: 'about me',
    name: 'Shir the great'
    })
}) 

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        name: 'Shir',
        message: 'You are being helped citizen, Fear not'
    })

})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You done did fuck up now'
        })
    } 
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error})
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error){
            return res.send(error)
        }
        return res.send({
            location, 
            forecast: forecastData,
            address: req.query.address
         })
        })
    })
    })
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
    products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 help',
        errorMessage: 'Help article not found',
        name: 'Shir'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        errorMessage: 'Page not Found',
        name: 'Shir'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
