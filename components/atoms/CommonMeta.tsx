import { FC } from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const CommonMeta: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
