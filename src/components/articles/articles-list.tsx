import { ArticleListData, ArticleListItem } from '@/libs/api/types'
import ArticlesItem from './articles-item'
import './articles-list.scss'
import { Suspense } from 'react'
import { getArticlesList } from '@/libs/api/get-articles-list'

const ArticlesList = async ({articles}:{articles: ArticleListData | undefined}) => {
  return (
    <section className='articles-grid'>
      <div className='container'>
        <ul className='articles-grid__list'>
          {!!articles ? (
            articles?.data.map((article: ArticleListItem) => (
              <ArticlesItem
                key={article.id}
                title={article.attributes.preview_title}
                description={article.attributes.preview_subtitle}
                slug={article.attributes.slug}
                image={article.attributes.preview_picture_desktop.data.attributes.url}
                imageTablet={article.attributes.preview_picture_tablet.data.attributes.url}
                imageMobile={article.attributes.preview_picture_mobile.data.attributes.url}
              />
            ))
          ) : (
            <p>Нет статей</p>
          )}
        </ul>
        {/* <ul className='articles-grid__list'>
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            twoColumns
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
          <ArticlesItem
            title='Аллергия на коже у ребенка'
            description='По определению ВОЗ, аллергия — это реакция гиперчувствительности, в основе которой лежат...'
            slug='article-1'
            image='/img/articles-page/1.jpg'
            imageTablet='/img/articles-page/1-tablet.jpg'
            imageMobile='/img/articles-page/1-mobile.jpg'
          />
        </ul> */}
      </div>
    </section>
  )
}

export default ArticlesList
