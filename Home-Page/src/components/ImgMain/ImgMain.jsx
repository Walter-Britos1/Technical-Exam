import styles from "./ImgMain.module.css";
import circleIcon from "../../assets/img/circles.svg";

function ImgMain() {
  return (
    <div className={styles.containerImg}>
      <img className={styles.circleIcon} src={circleIcon} alt="circle icon" />
    </div>
  );
}

export default ImgMain;
