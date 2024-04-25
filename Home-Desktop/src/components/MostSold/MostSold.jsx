import ProductCard from "../ProductCard/ProductCard";
import styles from "./MosSold.module.css";

function MostSold() {
  return (
    <>
    <p className={styles.titleMostSold}>LAS MAS VENDIDAS</p>
    <div className={styles.containerMostSold}>
      {[...Array(5)].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
    </>
  )
}

export default MostSold;