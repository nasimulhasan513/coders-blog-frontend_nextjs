import Head from 'next/head'
import { fetchArticles, fetchCategories } from '../http'
import { AxiosResponse } from 'axios'
import { IArticle, ICategory, ICollectionResponse } from '../types'
import { NextPage, GetServerSideProps } from 'next'
import Tab from '../components/Tab'
import ArticleList from '../components/ArticleList'
import qs from 'qs'

interface IpropTypes {
  categories: {
    items: ICategory[]
  },
  articles: {
    items: IArticle[],
  }
}

const Home: NextPage<IpropTypes> = ({ categories, articles }) => {


  return (
    <>
      <Head>
        <title>Coders Blog Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tab categories={categories.items} />

      <ArticleList articles={articles.items} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const options = {
    populate: ['author.avatar'],
    sort:['id:desc']
  }
  const qureryString = qs.stringify(options)
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(qureryString)
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()

  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      }
    }
  }


}



export default Home