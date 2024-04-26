import iconLocation from "../../../assets/img/locationMobile.svg";
import styles from "./FooterMobile.module.css";

function FooterMobile() {
  return (
    <footer className={styles.footerMobileContainer}>
      <p className={styles.footerTitleMobile}>MI TIENDA</p>
      <p className={styles.moreInfo}>
        condiciones <br /> trabaja con nosotros <br /> medios de pago <br />{" "}
        preguntas frecuentes
      </p>
      <div className={styles.btnMobile}>
        <p className={styles.contentBtn}>BOTÓN DE ARREPENTIMIENTO</p>
      </div>
      <section className={styles.locationContainer}>
        <img src={iconLocation} alt="" />
        <p className={styles.location}>SUCURSALES</p>
      </section>
      <section className={styles.contactContainer}>
        <p className={styles.contact}>
          Whatsapp 2215137270 <br />
          ecommerce@mateu.com.ar <br />
          La Plata 1900, Buenos Aires, Argentina
        </p>
      </section>
      <section className={styles.basisConditionsContainer}>
        <div className={styles.conditionsContent}>
          Powered by Pierce commerce
        </div>
        <div className={styles.pierceContainer}></div>
        <p className={styles.conditionsMobile}>© 2023 MateuSports</p>
        <div className={styles.containerIconMobile}>
          <div className={styles.qrContainer}></div>
          <div className={styles.vtexContainerMobile}></div>
        </div>
      </section>
    </footer>
  );
}

export default FooterMobile;
