import circleIcon from "../../../assets/img/circleIconMobile.svg";
import styles from "./ImgMainMobile.module.css";

function ImgMainMobile() {
  return (
    <div className={styles.imgMainMobile}>
      <img className={styles.circleIconMobile} src={circleIcon} alt="circle icon" />
    </div>
  )
}

export default ImgMainMobile;