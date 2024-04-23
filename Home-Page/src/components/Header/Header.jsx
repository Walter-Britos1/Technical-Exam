import Logo from '../Logo/Logo';
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
}

