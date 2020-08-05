// https://vuejs.org/v2/guide/#Declarative-Rendering

var app = new Vue({
  el: '#app',
  data: {
    appTitle: 'Luigi TodoApp!',
    toDoArray: [],
    inputTodo: ""
  },

  methods: {
    addTodo() {

      this.toDoArray.push(this.inputTodo)
      this.inputTodo = "";

    },

    clearTodo() {

      let emptyArr = [];
      this.toDoArray = emptyArr;
      vm.$forceUpdate();      
    }
  }
})