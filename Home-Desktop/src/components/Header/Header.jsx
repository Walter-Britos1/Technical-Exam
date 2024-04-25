import iconProfile from "../../assets/img/profile.svg";
import iconTrolley from "../../assets/img/trolley.svg";
import iconSearch from "../../assets/img/search.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Mi Tienda</div>
      <div className={styles.searchAndIcons}>
        <div className={styles.searchbox}>
          <div className={styles.inputAndIcon}>
            <input type="text" className={styles.searchInput} />
            <img src={iconSearch} alt="search" className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.profile}>
            <img
              src={iconProfile}
              alt="profile"
              className={styles.profileIcon}
            />
            <p className={styles.account}>Mi cuenta</p>
          </div>
          <img src={iconTrolley} alt="trolley" className={styles.trolleyIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
