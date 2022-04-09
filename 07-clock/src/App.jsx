import { useState } from 'react'
import Clock from './components/Clock';
import Timer from './components/timer'
import './App.css';

const App = () => {
	const [showClock, setShowClock] = useState(false)

	const toggleClock = () => {
		setShowClock(!showClock)
	}

	return (
		<div className="container text-center">
			<button onClick={toggleClock} id="toggle-clock" className="btn btn-outline-light">
				{showClock ? 'Hide clock' : 'Show clock'}
			</button>

			{showClock && (
				<div id="clock-wrapper" className="mt-3">
					<Clock />
				</div>
			)}

			<Timer />
		</div>
	)
}

export default App;
