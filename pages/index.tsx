import type { GetStaticProps, NextPage } from 'next'
import { getAllPosts } from '../lib/api'
import { PostList } from '../types/posts'
import { PostsList } from '../components/pages/PostsList'
import { Header } from '../components/atoms/Header'
import { Footer } from '../components/atoms/Footer'
import { MainLayout } from '../components/atoms/MainLayout'
import { ContainerLayout } from '../components/atoms/ContainerLayout'
import { CommonMeta } from '../components/atoms/CommonMeta'

type Props = {
  allPosts: PostList[]
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <ContainerLayout>
      <CommonMeta title="asdf" />

      <Header />

      <MainLayout>
        <PostsList posts={allPosts} />
      </MainLayout>

      <Footer />
    </ContainerLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  return {
    props: { allPosts },
  }
}

export default Home
