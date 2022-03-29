/**
 * Open Weather Map API
 */

const API_KEY = '32cd3c29aab67ddbedd8d8db1d91d627'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

/**
 * Get current weather for a city
 * 
 * @param {string} query City to get current weather for
 */
const getCurrentWeather = async query => {
  // get weather for query from OpenWeatherMap API
  const response = await fetch(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)

  // convert response from JSON
  const data = await response.json()

  // return current weather
  return data
}