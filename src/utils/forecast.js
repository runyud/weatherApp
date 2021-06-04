const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=146eb9f3ed4170f9c932f5acc3979323&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        {
            weather_descriptions: body.current.weather_descriptions[0],
            temperature: body.current.temperature,
            feelslike: body.current.feelslike,
            humidity: body.current.humidity,
            precip: body.current.precip,
            wind_speed: body.current.wind_speed,
            weather_icon: body.current.weather_icons[0]
        }
      );
    }
  });
};

module.exports = forecast;
