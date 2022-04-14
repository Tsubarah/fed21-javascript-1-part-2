/**
 * Open Weather Map API
 */

import axios from 'axios'

const API_KEY = '32cd3c29aab67ddbedd8d8db1d91d627'
const BASE_URL = "https://api.openweathermap.org/data/2.5"


/**
 * Get current weather for a city with Axios. With Axios we dont need to convert from JSON. It needs to be in a try/catch though.
 *
 * @param {string} query City to get current weather for
 */

const getCurrentWeatherWithAxios = async query => {
	const response = await axios.get(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)
}


/**
 * Get current weather for a city with fetch.
 *
 * @param {string} query City to get current weather for
 */
const getCurrentWeather = async query => {
	// get weather for query from OpenWeatherMap API
	const response = await fetch(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)

	// convert response from JSON
	const data = await response.json()

	// fake slow api
	// await new Promise(r => setTimeout(r, 1500))

	// return current weather
	return data
}

export {
	getCurrentWeather,
}
