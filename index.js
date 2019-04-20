var https = require('https');
var preference = require('../dist/preference');
var openWeatherAppAppid = '30173929657489149776555c35a4e6cc';

var getForecast =  function () {
    return new Promise(function (resolve, reject){
        https.get('https://api.openweathermap.org/data/2.5/weather?q='+preference.city+'&units='+preference.units+'&appid='+openWeatherAppAppid, function(res){
            res.on('data', function(resData){
                var resDataParse = JSON.parse(resData);
                var data = {
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