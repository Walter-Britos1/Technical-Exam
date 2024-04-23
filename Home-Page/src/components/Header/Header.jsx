import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar />
    </div>
  )
}

