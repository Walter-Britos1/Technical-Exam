import styles from "./InfoSection.module.css";
import bagIcon from "../../assets/img/bag.svg";
import walletIcon from "../../assets/img/wallet.svg";
import transportIcon from "../../assets/img/transport.svg";

function InfoSection() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.bagContainer}>
        <img className={styles.bagIcon} src={bagIcon} alt="" />
        <div className={styles.detailBagContainer}>
          <p className={styles.detailBag}>
            Elegí los productos que vas a comprar
          </p>
          <p className={styles.moreDetailBag}>
            Si querés más de uno, sumalos a tu carrito.
          </p>
        </div>
      </div>
      <div className={styles.walletContainer}>
        <img className={styles.walletIcon} src={walletIcon} alt="" />
        <div className={styles.detailWalletContainer}>
          <p className={styles.detailWallet}>
            Pagá con el medio de pago que quieras
          </p>
          <p className={styles.moreDetailWallet}>
            Comprá con seguridad: usamos la tecnología de Mercado Pago.
          </p>
        </div>
      </div>
      <div className={styles.transportContainer}>
        <img className={styles.transportIcon} src={transportIcon} alt="" />
        <div className={styles.detailTransportContainer}>
          <p className={styles.detailTransport}>
            Recibí el producto que esperás
          </p>
          <p className={styles.moreDetailTransport}>
            Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu
            entrega con Mercado Envíos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
