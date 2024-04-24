import styles from "./ProductCard.module.css";
import iconArrowL from "../../assets/img/arrow-l.svg";
import iconArrowR from "../../assets/img/arrow-r.svg";

function ProductCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.rectangle}>
        <div className={styles.containerImage}>
          <div className={styles.image}></div>
          <img className={styles.arrowLeft} src={iconArrowL} alt="" />
          <img className={styles.arrowRight} src={iconArrowR} alt="" />
          <p className={styles.descriptionBrand}>Samsung</p>
          <p className={styles.description}>Smart Tv 75 UHD</p>
          <p className={styles.price}>$1.100.999</p>
          <div className={styles.btnContainer}>
            <p className={styles.compra}>Comprar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
