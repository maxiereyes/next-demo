import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.links} href='/'>Home</Link>
        <Link className={styles.links} href='/client'>Client</Link>
        <Link className={styles.links} href='/server'>Server</Link>
      </nav>
    </header>
  )
}

export default Header
