import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateTodoPage from './pages/CreateTodoPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TodosPage from './pages/TodosPage'
import TodoPage from './pages/TodoPage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import EditTodoPage from './pages/EditTodoPage'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/todos/:id" element={<TodoPage />} />
					<Route path="/todos/create" element={<CreateTodoPage />} />
					<Route path="todos/:id/edit" element={<EditTodoPage />}  />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
