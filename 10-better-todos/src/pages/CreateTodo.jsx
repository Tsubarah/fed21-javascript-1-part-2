import AddNewTodoForm from '../components/AddNewTodoForm'
import TodosAPI from '../services/TodosAPI'


export default function CreateTodo() {
    // const navigate = useNavigate()

    // Create a new todo in the api
	const createTodo = async (newTodo) => {
		await TodosAPI.createTodo(newTodo)
	}
  return (
    <div>
        <AddNewTodoForm onAddNewTodo={createTodo}/>
    </div>
  )
}
