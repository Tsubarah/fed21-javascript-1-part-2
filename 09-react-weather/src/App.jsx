import { useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import SearchCity from './components/SearchCity'
import { getCurrentWeather } from './services/owmapi'
import './App.css'

const App = ({ handleSubmit }) => {


	const [city, setCity] = useState('')

	const handleCity = (acity) => {
		setCity(acity)
	}

	useEffect(() => {
		console.log(getCurrentWeather(city))
	}, [city])	


	return (
		<div id="app" className="container">
			<SearchCity onNewCity={handleCity}/>

			<Forecast />
		</div>
	)
}

export default App;
