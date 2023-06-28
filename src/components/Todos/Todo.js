import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line, RiCheckFill } from "react-icons/ri"


function Todo (props) {
   let todoClass = styles.todoItem
   let todoIconClass = styles.todoIcon
   let todoText = styles.text
   if(props.isCompleted){
      todoClass =styles.todoItemGrey
      todoIconClass = styles.todoIconGrey
      todoText = styles.textGrey
   }

   return (
      <div onDoubleClick={()=>props.deleteTodo(props.id)}className={todoClass}>
         <div className={todoText}>
            <RiTodoFill className={todoIconClass}/>
            <span>{props.children}</span>
         </div>
         <div className={styles.todoBtnPanel}>
               <RiDeleteBin2Line className={styles.todoIconDel} onClick={()=>props.deleteTodo(props.id)}/>
               <RiCheckFill className={styles.todoIconComp} onClick={()=>props.completedTodo(props.id)}/>
         </div>
      </div>
   )
}

export default Todo