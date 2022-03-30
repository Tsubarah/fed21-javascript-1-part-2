/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
  data() {
    return {
      count: 0,
      msg: 'Hello, Vue!',
      username: 'Anonymous',
      todos: [
				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: false },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
			],
      salary: 10,
      showBox: true,
      x: 0,
      y: 0,
    }
  },
  methods: {
    getSalaryImg() {
      return this.salary >= 50
        ? 'https://c.tenor.com/6Hixx4SFAeQAAAAM/backing-you-get-yours.gif'
        : 'https://c.tenor.com/noQy6HSBoZ4AAAAd/poor-no-money.gif'
    },
    increaseSalary(amount = 1) {
      this.salary += amount
    },
    decreaseSalary(amount = 1) {
      /**
       * 3 ways of doing it
       */

      /*
      if (this.salary - amount >= 5) {
        this.salary -= amount
      } else {
        this.salary = 5;
      }
      */

      /*
      if (this.salary - amount < 5) {
       this.salary = 5
       return
      }
      */

     this.salary = (this.salary - amount >= 5)
        ? this.salary - amount
        : 5
    }, 

    updateCoords(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },

    toggleBox() {
      this.showBox = !this.showBox
    }
  },
  computed: {
    salaryClass() {
      return this.salary >= 20 ? 'good-salary' : 'bad-salary'
    }
  }
})

// Mounts the created app to the div #app in the DOM
app.mount('#app')