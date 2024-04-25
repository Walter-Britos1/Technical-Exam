import styles from "./Popular.module.css";

function Popular() {
  return (
    <div className={styles.containerPopular}>
      <p className={styles.title}>Visitá las categorías más populares</p>
      <div className={styles.containerCategories}>
        <div className={styles.containerSneakers}>
          <p className={styles.sneakersTitle}>ZAPATILLAS</p>
        </div>
      </div>
      <div className={styles.containerSoccer}>
        <p className={styles.soccerTitle}>FÚTBOL</p>
        <div className={styles.containerTights}></div>
        <p className={styles.tightsTitle}>CALZAS</p>
        <div className={styles.containerBall}></div>
        <p className={styles.titleBall}>PELOTAS</p>
      </div>
    </div>
  );
}

export default Popular;
