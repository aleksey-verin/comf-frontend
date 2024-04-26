import ArticlesIntro from '@/components/articles/articles-intro'
import ArticlesList from '@/components/articles/articles-list'
import ArticlesPagination from '@/components/articles/articles-pagination'
import styles from './page.module.scss'
import { getArticlesList } from '@/libs/api/get-articles-list'
import { Suspense } from 'react'
import ArticlesListSkeleton from '@/components/articles/articles-skeleton'

export default async function Articles() {
  const articles = await getArticlesList()

  return (
    <main className={styles.articles_page}>
      <ArticlesIntro />
      <ArticlesList articles={articles} />
      <ArticlesPagination />
    </main>
  )
}
