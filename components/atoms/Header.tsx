import { FC } from 'react'
import Link from 'next/link'
import styles from '../../styles/components/atoms/Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={'/'}>
          <a>asdf</a>
        </Link>
      </h1>
    </header>
  )
}
