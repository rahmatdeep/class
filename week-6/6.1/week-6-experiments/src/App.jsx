import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

export function App() {
  const[selected, setSelected] = useState(1);
  return <div>
    <button onClick={function(){
      setSelected(1)
    }}>1</button>
    <button onClick={function(){
      setSelected(2)
    }}>2</button>
    <button onClick={function(){
      setSelected(3)
    }}>3</button>
    <button onClick={function(){
      setSelected(4)
    }}>4</button>
    <Todo id={selected} />
  </div>
}

function Todo({id}){
  const [todo, setTodo] = useState([])

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todo?id=" + id)
  //     .then(async function(res) {
  //       const json = await res.json();
  //       setTodo (json.todo);
  //     })
  // }, [id])

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((res)=>{setTodo(res.data.todo)})
  },[id])



  return<div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}
// function Todo({id}) {
//   const [todo, setTodo] = useState({});

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todo?id=" + id)
  //     .then(async function(res) {
  //       const json = await res.json();
  //       setTodo (json.todo);
  //     })
  // }, [])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }







export default App
