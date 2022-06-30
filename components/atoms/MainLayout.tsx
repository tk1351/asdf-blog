import { FC, ReactNode } from 'react'
import styles from '../../styles/components/atoms/MainLayout.module.css'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}
