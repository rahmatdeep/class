/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = function(){
    fetch("http://localhost:3000/todos")
   .then(async function(res){
   const json = await res.json();
  //  console.log(json)
   setTodos(json.todoData)
   })
  }
fetchTodos()
//   useEffect(() => {
//     fetchTodos()
// }, [])
  
// setInterval(()=>{
//   fetch("http://localhost:3000/todos")
//   .then(async function(res){
//     const json = await res.json();
//     setTodos(json.todoData)
//     // console.log(json)
//   })
// },1000)

  

  return (
    <div>
      <CreateTodo fetchTodos={fetchTodos}></CreateTodo>
      <Todos inputTodo={todos}></Todos>
    </div>
  )
}

export default App
