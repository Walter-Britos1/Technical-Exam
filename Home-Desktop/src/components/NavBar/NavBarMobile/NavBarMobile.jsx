import iconCloseMenu from "../../../assets/img/iconCloseMenu.svg";
import iconOffertsMenu from "../../../assets/img/offertsIconMenu.svg";
import styles from "./NavBarMobile.module.css";

function NavBarMobile({ isOpen, handleClose }) {

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <p className={styles.menuLogo}>MI TIENDA</p>
        <button className={styles.closeMenu} onClick={handleClose}>
          <img src={iconCloseMenu} alt="" />
        </button>
      </div>
      <p className={styles.optionMenu}>Muebles</p>
      <div className={styles.line}></div>
      <p className={styles.optionMenu}>Calzado</p>
      <div className={styles.line}></div>
      <p className={styles.optionMenu}>Colchones</p>
      <div className={styles.line}></div>
      <p className={styles.optionMenu}>Herramientas</p>
      <div className={styles.line}></div>
      <div className={styles.offertsContainer}>
        <p className={styles.offerts}>Ofertas</p>
        <img src={iconOffertsMenu} alt="" />
      </div>
    </div>
  );
}

export default NavBarMobile;
