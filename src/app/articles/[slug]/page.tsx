import { Metadata, ResolvingMetadata } from 'next'
import ArticlePromo from '@/components/article/article-promo'
import ArticleContent from '@/components/article/article-content'
import ArticleImportant from '@/components/article/article-important'
import ArticleBottom from '@/components/article/article-bottom'

type Props = {
  params: { slug: string }
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Article ${params.slug}`,
    description: 'Generated by create next app',
  }
}

export default function Articles({ params }: { params: { slug: string } }) {
  return (
    <main>
      <ArticlePromo />
      <ArticleContent />
      <ArticleImportant />
      <ArticleBottom />
    </main>
  )
}
