import { useState,  useEffect } from "react";
import NavBarMobile from "../../NavBar/NavBarMobile/NavBarMobile";
import iconProfile from "../../../assets/img/profileMobile.svg";
import iconTrolley from "../../../assets/img/trolleyMobile.svg";
import iconBtn from "../../../assets/img/menu.svg";
import iconSearch from "../../../assets/img/searchMobile.svg";
import styles from "../HeaderMobile/HeaderMobile.module.css";

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.containerMobile}>
      <div className={styles.HeaderMobile}>
        <nav className={styles.navMobile}>
          <button className={styles.btnMenu} onClick={handleButtonClick}>
            <img className={styles.iconBtn} src={iconBtn} alt="" />
          </button>
          {isMenuOpen && <NavBarMobile isOpen={isMenuOpen} handleClose={handleButtonClick}/>}
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
