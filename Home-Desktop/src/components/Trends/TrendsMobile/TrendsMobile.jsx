import ProductCardMobile from "../../ProductCard/ProductCardMobile/ProductCardMobile";
import circleIcon from "../../../assets/img/circles.svg";
import styles from "./TrendsMobile.module.css";

function TrendsMobile() {
  return (
    <>
      <p className={styles.trendsTitle}>Tendencias</p>
      <div className={styles.containerTrendsMobile}>
        {[...Array(3)].map((_, index) => (
          <ProductCardMobile key={index} />
        ))}
      <img className={styles.circles} src={circleIcon} alt="circle icon" />
      </div>
    </>
  )
}

export default TrendsMobile;