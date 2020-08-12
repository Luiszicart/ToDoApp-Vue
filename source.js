// https://vuejs.org/v2/guide/#Declarative-Rendering

var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Luigi TodoApp!',
    toDoArray: [],
    inputTodo: ''
  },

  methods: {
    addTodo() {
      this.toDoArray.push(this.inputTodo)
      this.inputTodo = ''
    },

    clearTodo() {
      let emptyArr = []
      this.toDoArray = emptyArr
      this.$forceUpdate()
    },

    clearThemeLight() {

      document.getElementById("mode").setAttribute("href", "style.css")      
    },

    clearThemeDark() {

      document.getElementById("mode").setAttribute("href", "dark.css")     
    },

    taskRemove(index) {
      this.toDoArray.splice(index, 1)
    },

    taskCompleted(index) {
      this.toDoArray
    }
  }
})
