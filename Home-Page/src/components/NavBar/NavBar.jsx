import iconFire from "../../assets/img/fire.svg"
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
    <a href="#" className={styles.navLink}>Muebles</a>
    <a href="#" className={styles.navLink}>Calzados</a>
    <a href="#" className={styles.navLink}>Colchones</a>
    <a href="#" className={styles.navLink}>Herramientas</a>
    <div className={styles.specialOffer}>
      <a href="#" className={styles.offerLink}>Ofertas</a>
      <img src={iconFire} alt="fire" className={styles.fireIcon} />
    </div>
  </nav>
  )
}

export default NavBar;