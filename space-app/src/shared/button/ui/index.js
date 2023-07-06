import styles from "./button.module.scss"

export const Button = ({variant, text, onClick}) => (
  <button type="button" onClick={onClick} className={styles.Button} data-variant={variant}>{text}</button>
)
