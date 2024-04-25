import './article-important.scss'

const ArticleImportant = () => {
  return (
    <div className='article-important-block'>
      <div className='container'>
        <div className='article-important-block__row'>
          <div className='article-important-block__title'>Важно</div>
          <div className='article-important-block__text'>
            <p>
              Информация из&nbsp;данного раздела не&nbsp;может заменить консультацию специалиста.
              Чтобы установить диагноз и&nbsp;получить рекомендации по&nbsp;правильному лечению,
              в&nbsp;случае подозрительных симптомов или при обострении заболевания обратитесь
              к&nbsp;специалисту.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleImportant
