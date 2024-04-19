import ArticlesIntro from "@/components/articles/articles-intro";
import ArticlesList from "@/components/articles/articles-list";
import ArticlesPagination from "@/components/articles/articles-pagination";
import styles from "./page.module.scss";

export default function Articles() {
  return (
    <main className={styles.articles_page}>
      <ArticlesIntro />
      <ArticlesList />
      <ArticlesPagination />
    </main>
  )
}
