import imgProduct from "../../../assets/img/productMobile.png";
// import circleIcon from "../../../assets/img/circles.svg";
import styles from "./ProductCardMobile.module.css";

function ProductCardMobile() {
  return (
    <div className={styles.cardContainerMobile}>
      <div className={styles.cardMobile}>
        <div className={styles.containerImgProduct}>
          <img className={styles.imgProductMobile} src={imgProduct} alt="" />
        </div>
        <p className={styles.description1}>Samsung</p>
        <p className={styles.description2}>Smart Tv 75 UHD</p>
        <p className={styles.descriptionPrice}>$ 1.100.999</p>
        <div className={styles.btn}>
          <p className={styles.compraMobile}>Comprar</p>
        </div>
      </div>
      {/* <img src={circleIcon} alt="circle icon" /> */}
    </div>
  );
}

export default ProductCardMobile;
