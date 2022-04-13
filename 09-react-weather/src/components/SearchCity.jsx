import { useEffect, useState } from 'react'

const SearchCity = ({ onNewCity }) => {

	const [newCityTitle, setNewCityTitle] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		const newCity = newCityTitle
		onNewCity(newCity)

		setNewCityTitle('')
	}
	
	return (
		<div id="search-wrapper">
			<form id="search-form" onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter city to search for" aria-label="City" aria-details="Search for city to show current weather for."
						onChange={e => setNewCityTitle(e.target.value)}
						value={newCityTitle}
					/>
					<button type="submit" className="btn btn-success">🔍</button>
				</div>
			</form>
		</div>
	)
}

export default SearchCity
