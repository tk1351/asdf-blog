import { FC, ReactNode } from 'react'
import styles from '../../styles/components/atoms/ContainerLayout.module.css'

type Props = {
  children: ReactNode
}

export const ContainerLayout: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
