import { useState } from 'react'
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
//https://react-icons.github.io/react-icons/icons?name=ri - иконки
//https://www.npmjs.com/package/uuid - генератор уникальных id

function App() {

  const [todos, setTodos] = useState([
    {id:1, text:'Купить хлеба', isComleted: false},
    {id:2, text:'Помыть машину', isComleted: false},
    {id:3, text:'Сходить в кинотеатр', isComleted: false},
 ])

 let checkComplitedTasks = 0
 todos.forEach((item)=>{if(item.isComleted===true) {checkComplitedTasks++}})

 function addTodoHandler (newTodo) {
  setTodos([...todos, {text:newTodo, isComleted: false, id:(Math.random()*100000)}])
 }

 function deleteTodoHandler (id) {
  setTodos([...todos.filter(item=>item.id!==id)])
 }

 function completedTodoHandler (id) {
  todos.forEach((item)=>{
    if(item.id===id&&item.isComleted===false){
      return item.isComleted=true
    } else if (item.id===id&&item.isComleted===true) {
      return item.isComleted=false
    }
  })
  setTodos(JSON.parse(JSON.stringify(todos)))
 }

 function deleteAllTodos () {
  setTodos([])
 }

 function deleteCompletedTodos () {
  setTodos([...todos.filter(item=>!item.isComleted)])
 }

  return (
    <div className="App">
      <h1>TodoApp</h1>
        <TodoForm addTodoHandler={addTodoHandler}/>
        <ButtonPanel checkComplitedTasks={checkComplitedTasks} deleteAllTodos={deleteAllTodos} deleteCompletedTodos={deleteCompletedTodos}/>
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} completedTodo={completedTodoHandler}/>
    </div>
  );
}

export default App;
