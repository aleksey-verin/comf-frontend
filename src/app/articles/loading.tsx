import './loading.scss'

const Loading = () => {
  return (
    <main className='articles_page'>
      <section className='articles-intro'>
        <div className='container'>
          <h2 className='articles-intro__title title'>Статьи</h2>
        </div>
      </section>
      <section className='articles-grid'>
        <div className='container'>
          <ul className='articles-grid__list'>
            <li className='skeleton-item'>
              <div className='skeleton-item__image'></div>
              <div className='skeleton-item__title'></div>
              <div className='skeleton-item__text'></div>
              <div className='skeleton-item__button'></div>
            </li>
            <li className='skeleton-item'>
              <div className='skeleton-item__image'></div>
              <div className='skeleton-item__title'></div>
              <div className='skeleton-item__text'></div>
              <div className='skeleton-item__button'></div>
            </li>
            <li className='skeleton-item skeleton-item-third'>
              <div className='skeleton-item__image'></div>
              <div className='skeleton-item__title'></div>
              <div className='skeleton-item__text'></div>
              <div className='skeleton-item__button'></div>
            </li>
          </ul>
        </div>
      </section>
      <div className='skeleton-pagination'>
        <div className='skeleton-pagination__wrap'></div>
      </div>
    </main>
  )
}

export default Loading
