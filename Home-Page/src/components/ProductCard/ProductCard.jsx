import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.rectangle}>
        <div className={styles.containerImage}>
          <div className={styles.image}></div>
          <p className={styles.description}>Samsung Smart Tv 75 UHD</p>
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