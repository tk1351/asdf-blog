import { FC } from 'react'
import Link from 'next/link'
import { PostList } from '../../types/posts'
import styles from '../../styles/components/pages/PostsList.module.css'

type Props = {
  posts: PostList[]
}

export const PostsList: FC<Props> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug} className={styles.listItem}>
          <article>
            <h3 className={styles.title}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <p>{post.excerpt}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}
