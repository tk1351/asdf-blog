import { FC } from 'react'
import { PostType } from '../../types/posts'
import styles from '../../styles/components/pages/PostDetail.module.css'

type Props = {
  post: PostType
}

export const PostDetail: FC<Props> = ({ post }) => {
  return (
    <article>
      <h2 className={styles.title}>{post.title}</h2>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
