import iconProfile from "../../../assets/img/profileMobile.svg";
import iconTrolley from "../../../assets/img/trolleyMobile.svg";
import iconBtn from "../../../assets/img/menu.svg";
import iconSearch from "../../../assets/img/searchMobile.svg";
import styles from "../HeaderMobile/HeaderMobile.module.css";

function HeaderMobile() {
  return (
    <header className={styles.containerMobile}>
      <div className={styles.HeaderMobile}>
        <nav className={styles.navMobile}>
          <button className={styles.btnMenu}>
            <img className={styles.iconBtn} src={iconBtn} alt="" />
          </button>
          <p className={styles.logoMobile}>Mi TIENDA</p>
          <div className={styles.containerIcoMobileProfile}>
            <img className={styles.icoProfileMobile} src={iconProfile} alt="" />
          </div>
          <div className={styles.containerIcoMobileTrolley}>
            <img className={styles.icoTrolleyMobile} src={iconTrolley} alt="" />
          </div>
        </nav>
      </div>
      <div className={styles.containerSearchMobile}>
        <div className={styles.searchMobileRectangle}>
          <div className={styles.inputContainer}>
            <input className={styles.mobileInput} type="text" />
            <img className={styles.searchMobile} src={iconSearch} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
