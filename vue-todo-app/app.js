/**
 * Vue todo app
 */

const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      todo: {
        title: '',
        completed: false,
      },
      todos: [
        { title: 'Go to the gym', completed: true},
        { title: 'Clean my desk', completed: false}
      ],
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo)
      this.todo = {
        title: '',
        completed: false,
      }
    }
  }
});

app.mount('#app')