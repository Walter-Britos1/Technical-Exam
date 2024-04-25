import styles from "./Footer.module.css";
import iconLocation from "../../assets/img/location.svg";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.helpContainer}>
        <p className={styles.helpInfo} style={{ marginTop: "104px" }}>
          CONDICIONES
        </p>
        <p className={styles.helpInfo}>TRABAJA CON NOSOTROS</p>
        <p className={styles.helpInfo}>MEDIOS DE PAGO</p>
        <p className={styles.helpInfo}>PREGUNTAS FRECUENTES</p>
      </section>
      <section className={styles.containerBtn}>
        <p className={styles.btnContent}>BOTÓN DE ARREPENTIMIENTO</p>
      </section>
      <section className={styles.sectionPowerBy}>
        <p className={styles.powerByContent}>Powered by Pierce commerce</p>
        <div className={styles.vtex}></div>
      </section>
      <h1 className={styles.myStore}>MI TIENDA</h1>
      <section className={styles.sectionLocation}>
        <p>SUCURSALES</p>
        <img src={iconLocation} alt="" />
      </section>
      <section className={styles.sectionContact}>
        <p className={styles.contactInfo}>Whatsapp 2215137270</p>
        <p className={styles.contactInfo}>ecommerce@mateu.com.ar La Plata 1900,</p>
        <p className={styles.contactInfo}>Buenos Aires, Argentina</p>
      </section>
      <p className={styles.conditions}>© 2023 MateuSports</p>
      <div className={styles.sectionQr}></div>
    </footer>
  );
}

export default Footer;
