import { NextPage } from 'next'
import { PostDetail } from '../../components/pages/PostDetail'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'
import { PostType } from '../../types/posts'
import { Header } from '../../components/atoms/Header'
import { Footer } from '../../components/atoms/Footer'
import { MainLayout } from '../../components/atoms/MainLayout'
import { ContainerLayout } from '../../components/atoms/ContainerLayout'
import { CommonMeta } from '../../components/atoms/CommonMeta'

type Params = {
  params: {
    slug: string
  }
}

type Props = {
  post: PostType
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <ContainerLayout>
      <CommonMeta title={`asdf - ${post.title}`} />

      <Header />

      <MainLayout>
        <PostDetail post={post} />
      </MainLayout>

      <Footer />
    </ContainerLayout>
  )
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export default Post
