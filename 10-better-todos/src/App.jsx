import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import TodoPage from './pages/TodoPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import CreateTodo from './pages/CreateTodo'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route path="/todos/create" element={<CreateTodo/>} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;