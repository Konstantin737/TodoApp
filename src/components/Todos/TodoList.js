import styles from './TodoList.module.css'
import Todo from './Todo'

function TodoList ({todos, deleteTodo, completedTodo}) {

   let count = 0
   todos.forEach((item)=>{
      if(item.isComleted) {
         count++
      }
   })


   return (
      <div className={styles.todoList}>
         {todos.length===0&&<h3>Пока нет ни одной задачи</h3>}
         {todos.length>0&&todos.map((item) => {return <Todo isCompleted={item.isComleted} deleteTodo={deleteTodo} completedTodo={completedTodo} key={item.id} id={item.id}>
            {item.text}
         </Todo>})}
         {count>0&&<h3 className={styles.completedTodos}>Вы пометили как завершенные {count} задачи</h3>}
      </div>
   )
}

export default TodoList