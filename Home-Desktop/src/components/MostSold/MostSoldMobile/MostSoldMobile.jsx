import ProductCardMobile from "../../ProductCard/ProductCardMobile/ProductCardMobile";
import styles from "./MostSoldMobile.module.css";

function MostSoldMobile() {
  return (
    <>
      <p className={styles.mostSoldMobile}>LO MAS VENDIDOS</p>
      <div className={styles.containerMostSoldMobile}>
        {[...Array(3)].map((_, index) => (
          <ProductCardMobile key={index} />
        ))}
      {/* <img className={styles.circles} src={circleIcon} alt="circle icon" /> */}
      </div>
    </>
  )
}

export default MostSoldMobile;