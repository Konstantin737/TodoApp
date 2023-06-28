import { RiRefreshLine, RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"
import styles from './ButtonPanel.module.css'
import Button from '../UI/Button'

function ButtonPanel ({checkComplitedTasks, deleteAllTodos, deleteCompletedTodos}) {
   return (
      <div className={styles.button_panel}>
         <Button title='Удалить все задачи' onClickFunc={deleteAllTodos}>
            <RiRefreshLine className={styles.iconRestart}/>
         </Button>
         {checkComplitedTasks===0&&<Button title='Удалить завершенные задачи'>
            <RiDeleteBin2Line className={styles.iconDelete}/>
         </Button>}
         {checkComplitedTasks>0&&<Button title='Удалить завершенные задачи' onClickFunc={deleteCompletedTodos}>
            <RiDeleteBin2Fill className={styles.iconDeleteActive}/>
         </Button>}
      </div>
   )
}

export default ButtonPanel