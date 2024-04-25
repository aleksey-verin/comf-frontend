import Articles from '../home/articles/articles'
import './article-bottom.scss'
import ArticleLibs from './article-bottom/article-libs'

const ArticleBottom = () => {
  return (
    <div className='article-libs'>
      <ArticleLibs />
      <Articles />
    </div>
  )
}

export default ArticleBottom
