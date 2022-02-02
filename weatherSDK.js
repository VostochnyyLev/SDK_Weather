function Weather(city) {
    this.city = city;
    
};
Weather.prototype.init = function() {
    return fetch(
       `https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no`
    )
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            const obj = {
                temp: data.current.condition.text,
                condition: data.current.temp_c,
            };
            return obj;
        });
};