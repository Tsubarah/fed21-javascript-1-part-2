/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			newTodoTitleInput: '',
			todos: [
				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: false },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
			],
		}
	},

	methods: {
		createNewTodo() {
			// create new todo and push it to the todo list
			this.todos.push({ 
				title: this.newTodoTitleInput, 
				completed: false 
			})
			// clear the input field after pushing
			this.newTodoTitleInput = ''
		}, 
		toggleTodo(item) {
			item.completed = !item.completed
		},
		deleteTodo(item) {
			this.todos = this.todos.filter(t => t !== item)
		},
	}, 

	computed: {
		finishedTodos() {
			return this.todos.filter(todo => todo.completed)
		},

		newTodoIsValid() {
			return this.newTodoTitleInput.length >= 3
		},

		unfinishedTodos() {
			return this.todos.filter(todo => !todo.completed)
		},

		unfinishedTodosCount() {
			// Filters the uncompleted todos and saves it to a variable
			const unfinishedTodos = this.todos.filter(todo => !todo.completed)
			
			// Returns the length of how many uncompleted todos
			return unfinishedTodos.length


			// Optional way with reduce method
			return this.todos.reduce((previousValue, todo) => {
				if (todo.completed) {
					return previousValue
				}
				return previousValue + 1
			}, 0)
		}
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
