const request = require('request')
const chalk = require('chalk')

const forecast = ( long, lat, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=ea1931ed5f7ba42daa6421bbeae536a0&query='+ long + ',' + lat +'&units=m'

    request({url, json: true }, (error, {body} ) => {
    
        if (error) {
            callback('Unable to connect to network!', undefined)
        } else if (body.error) {
            callback('Unable to find you, you so damn lost', undefined)
        } else {
            callback( undefined, body.current.weather_descriptions[0] + ('. Its currently ') + body.current.temperature + (' degrees outside. It feels like ') + body.current.feelslike + (' degrees out'))
    }
            
        
    })
    
}


module.exports = forecast