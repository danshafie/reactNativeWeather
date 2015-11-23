var rootUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=0895023bf88999e39e32b5d035fe4ecf";
var apiKey = '0895023bf88999e39e32b5d035fe4ecf'
var _ = require('lodash');


var kelvinToF = function(kelvin){
	return Math.round((kelvin - 273.15) * 1.8 + 32) + "˚F" ;
}


module.exports = function(latitude, longitude){

	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

	return fetch(url)
		.then(function(res){
			return res.json()
		})
		.then(function(json){
			return {
				city: json.name,
				temperature: kelvinToF(json.main.temp),
				description: _.capitalize(json.weather[0].description)
			}
		})
}