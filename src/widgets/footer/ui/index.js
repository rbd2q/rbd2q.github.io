import styles from "./footer.module.css"

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <img src="images/rocket.png" className={styles.footerImage} alt="rocket"/>
      <span>Exciting space adventure!</span>
    </div>
  </footer>
)
