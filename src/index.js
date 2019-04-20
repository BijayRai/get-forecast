const https = require('https');
const preference = require('../userPreference');
const appid = '30173929657489149776555c35a4e6cc';

const getForecast =  function () {
    return new Promise(function (resolve, reject){
        https.get('https://api.openweathermap.org/data/2.5/weather?q='+preference.city+'&units='+preference.units+'&appid='+appid, function(res){
            res.on('data', function(resData){
                let resDataParse = JSON.parse(resData);
                let data = {
                    "weather": resDataParse.weather[0]['description'],
                    "temperature": resDataParse.main.temp,
                    "pressure": resDataParse.main.pressure,
                    "humidity": resDataParse.main.humidity,
                }
                resolve(data);
            });
        }).end();
    });
}
module.exports = getForecast;