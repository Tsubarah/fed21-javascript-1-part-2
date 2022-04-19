import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import TodosAPI from '../services/TodosAPI'

const TodoPage = () => {
	const [todo, setTodo] = useState([])
	const { id } = useParams()

	// Get todo from api
	const getTodo = async (id) => {
		const data = await TodosAPI.getTodo(id)
		setTodo(data)
		console.log(data)
	}

		// Toggle the completed status of a todo in the api
	const toggleTodo = async () => {
		await TodosAPI.updateTodo(todo.id, {
			completed: !todo.completed
		})
		getTodo(id)
	}


	useEffect(() => {
		getTodo(id)
	}, [id])

	return (
		<div>
			<h1>{todo.title}</h1>

			<p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not completed'}</p>

			<Button variant="success" onClick={toggleTodo}>Toggle</Button>
			<Button variant="warning">Edit</Button>
		</div>
	)
}

export default TodoPage
