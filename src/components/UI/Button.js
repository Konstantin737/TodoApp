import styles from './Button.module.css'

function Button (props) {

   return (
      <button onClick={props.onClickFunc} className={styles.button} title={props.title}>{props.children}</button>
   )
}

export default Button