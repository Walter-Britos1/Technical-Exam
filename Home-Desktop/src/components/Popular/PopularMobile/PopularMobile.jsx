import iconBlack from "../../../assets/img/circleBlack.svg";
import iconWhite from "../../../assets/img/circleWhite.svg"
import styles from "./PopularMobile.module.css";

function PopularMobile() {
  return (
    <>
      <div className={styles.popularMobilecontainer}>
        <div className={styles.titleContainer}>
          <p className={styles.popularTitle}>
            Visitá las categorías <br /> más populares
          </p>
        </div>
      </div>
      <div className={styles.sneakersMobile}>
        <p className={styles.zapatillasMobile}>ZAPATILLAS</p>
      </div>
      <div className={styles.circlesContainer}>
        <img src={iconBlack} alt="" />
        <img src={iconWhite} alt="" />
        <img src={iconWhite}alt="" />
        <img src={iconWhite} alt="" />
      </div>
    </>
  );
}

export default PopularMobile;
