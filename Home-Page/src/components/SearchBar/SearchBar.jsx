import styles from './SearchBar.module.css';

export default function SearchBar () {
  return (
    <div className={styles.containerSearchBar}>
      <div className={styles.searchBox}>
        <input className={styles.inputSearch} />
      </div>
    </div>
  )
}