import styles from "./button.module.scss"

export const Button = ({variant, text}) => (
    <button type="button" className={styles.Button} data-variant={variant}>{text}</button>
  )
