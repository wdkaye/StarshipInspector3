const PROXY_CONFIG = [
    {
      context: [
        "/WeatherForecast",
      ],

      target: "https://localhost:40443",
      secure: false
    }
  ]
  module.exports = PROXY_CONFIG;