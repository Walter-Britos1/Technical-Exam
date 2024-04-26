import ProductCardMobile from "../../ProductCard/ProductCardMobile/ProductCardMobile";
import iconCircleOrange from "../../../assets/img/circleOrange.svg";
import styles from "./MostSoldMobile.module.css";

function MostSoldMobile() {
  return (
    <>
      <p className={styles.mostSoldMobile}>LO MAS VENDIDOS</p>
      <div className={styles.containerMostSoldMobile}>
        {[...Array(3)].map((_, index) => (
          <ProductCardMobile key={index} />
        ))}
      <img className={styles.circlesOrange} src={iconCircleOrange} alt="circle icon" />
      </div>
    </>
  )
}

export default MostSoldMobile;