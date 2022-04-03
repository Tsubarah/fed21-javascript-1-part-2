/**
 * Vue todo app
 */

const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      todoTitle: '',
      todos: [
        { title: 'Go to the gym', completed: false},
        { title: 'Clean my desk', completed: false}
      ],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.todoTitle,
        completed: false,
      })
      this.todoTitle = ''
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(li => li !== todo)
    },
    toggleComplete(todo) {
      todo.completed = !todo.completed
    }
  },
  computed: {
    unfinishedTodos() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
});

app.mount('#app')