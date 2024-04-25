import ProductCard from "../ProductCard/ProductCard";
import styles from "./Trends.module.css";

function Trends() {
  return (
  <>
    <p className={styles.trends}>Tendencias</p>
    <div className={styles.containerTrends}>
      {[...Array(5)].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
    </>  
  );
}

export default Trends;
