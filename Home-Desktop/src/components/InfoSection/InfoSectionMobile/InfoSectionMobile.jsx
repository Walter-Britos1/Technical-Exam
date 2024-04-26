import iconStore from "../../../assets/img/storeMobile.svg";
import iconCircle from "../../../assets/img/circleInfo.svg";
import styles from "./InfoSectionMobile.module.css";

function InfoSectionMobile() {
  return (
    <div className={styles.infoContainerMobile}>
      <div className={styles.containerStoreMobile}>
        <img src={iconStore} alt="" />
        <p className={styles.storeDetailMobile}>Elegí los productos que <br /> vas a comprar</p>
        <p className={styles.moreDetails}>Si querés más de uno, sumalos a tu <br /> carrito.</p>
      </div>
      <img className={styles.circleInfo} src={iconCircle} alt="" />
    </div>
  )
}

export default InfoSectionMobile;