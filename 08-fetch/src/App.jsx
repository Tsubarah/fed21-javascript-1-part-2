import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
	const [resource, setResource] = useState('posts')
	const [data, setData] = useState()

	useEffect(() => {
		if (!resource) {
			return
		}

		const fetchResource = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`)	
			const resourceData = await res.json()
			console.log('Data:', resourceData)

			setData(resourceData)
		}
		fetchResource()

	}, [resource])

	return (
		<div className="App container">
			<h1>Fetch</h1>

			<div className="d-flex justify-content-between">
				<button onClick={() => setResource('albums')} className="btn btn-primary">Albums</button>
				<button onClick={() => setResource('photos')} className="btn btn-success">Photos</button>
				<button onClick={() => setResource('posts')} className="btn btn-warning">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-danger">Todos</button>
			</div>

			{data && (
				<>
					<h2>{resource}</h2>
					<p>There are {data.length} {resource}.</p>
					<ol>
						{data.map(item => (
							<li key={item.id}>{item.title}</li>
						))}
					</ol>
				</>
			)}

		</div>
	)
}

export default App;
