import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm ({addTodoHandler}) {

   const [text, setText] = useState('')

   const onSubmitHandler = (e) => {
      e.preventDefault()
      if(text!=='') {
         addTodoHandler(text)
      }
      setText('')
   }

   return (
      <form className={styles.formConteiner} onSubmit={onSubmitHandler}>
         <input 
            type="text" 
            placeholder='Enter new todo' 
            value={text} 
            onChange={(e)=>setText(e.target.value)}>
         </input>
         <Button type="submit">Submit</Button>
      </form>
   )
}

export default TodoForm