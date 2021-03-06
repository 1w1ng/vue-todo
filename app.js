import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    name:'This is todo list',
    newTodo: '', // input 的值
    todoList: [] // 待办事项的容器
  },
  methods:{
    addTodo:function(){
      this.todoList.push({
        title:this.newTodo,
        createdAt:new Date(),
        done: false // 添加一个 done 属性 标记未完成
      })
      this.newTodo = ''  // 变成空
    },
    // 删除待办
    removeTodo:function(todo){
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
    }
  },
  created:function(){
    window.onbeforeunload = () =>{
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('myTodos',dataString)
    }
    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
  }

  // created: function(){
  //   // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
  //   window.onbeforeunload = ()=>{
  //     let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
  //     window.localStorage.setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
  //   }

  //   let oldDataString = window.localStorage.getItem('myTodos')
  //   let oldData = JSON.parse(oldDataString)
  //   this.todoList = oldData || []

  // },
  // methods: {
  //   addTodo: function(){
  //     this.todoList.push({
  //       title: this.newTodo,
  //       createdAt: new Date(),
  //       done: false // 添加一个 done 属性
  //     })
  //     this.newTodo = ''
  //   },
  //   removeTodo: function(todo){
  //     let index = this.todoList.indexOf(todo) // Array.prototype.indexOf 是 ES 5 新加的 API
  //     this.todoList.splice(index,1) // 不懂 splice？赶紧看 MDN 文档！
  //   }
  // }
})                                                               
