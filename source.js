// https://vuejs.org/v2/guide/#Declarative-Rendering

var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Luigi TodoApp!',
    toDoArray: [],
    id: 0,
    inputTodo: ''
  },

  methods: {
    addTodo() {
      this.id++
      this.toDoArray.push({
        id: this.id,
        todo: this.inputTodo,
        completed: false
      })
      this.inputTodo = ''
    },

    clearTodo() {
      let emptyArr = []
      this.toDoArray = emptyArr
      this.$forceUpdate()
    },

    clearThemeLight() {
      document.getElementById('mode').setAttribute('href', 'style.css')
    },

    clearThemeDark() {
      document.getElementById('mode').setAttribute('href', 'dark.css')
    },

    taskRemove(id) {

      this.toDoArray.splice(id, 1)
    },

    taskCompleted(id) {

      console.log(this.toDoArray[id])
      this.toDoArray[id].completed = !this.toDoArray[id].completed 
   }
  }
})