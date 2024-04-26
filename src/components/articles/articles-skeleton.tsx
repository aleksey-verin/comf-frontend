import './articles-list.scss'
import './articles-list-skeleton.scss'

const ArticlesListSkeleton = () => {
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
              <div className='skeleton-item__wrap'>
                <div className='skeleton-item__image'></div>
                <div className='skeleton-item__title'></div>
                <div className='skeleton-item__text'></div>
                <div className='skeleton-item__button'></div>
              </div>
            </li>
            <li className='skeleton-item'>
              <div className='skeleton-item__wrap'>
                <div className='skeleton-item__image'></div>
                <div className='skeleton-item__title'></div>
                <div className='skeleton-item__text'></div>
                <div className='skeleton-item__button'></div>
              </div>
            </li>
            <li className='skeleton-item'>
              <div className='skeleton-item__image'></div>
              <div className='skeleton-item__title'></div>
              <div className='skeleton-item__text'></div>
              <div className='skeleton-item__button'></div>
            </li>
            <li className='skeleton-item'>
              <div className='skeleton-item__wrap'>
                <div className='skeleton-item__image'></div>
                <div className='skeleton-item__title'></div>
                <div className='skeleton-item__text'></div>
                <div className='skeleton-item__button'></div>
              </div>
            </li>
            <li className='skeleton-item'>
              <div className='skeleton-item__wrap'>
                <div className='skeleton-item__image'></div>
                <div className='skeleton-item__title'></div>
                <div className='skeleton-item__text'></div>
                <div className='skeleton-item__button'></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className='pagination'>
        <div className='container'>
          <div className='pagination__row'>
            <span className='pagination__btn-navigation pagination__btn-navigation--disable pagination__btn-navigation--prev'>
              Prev
              <svg
                width='28'
                height='21'
                viewBox='0 0 28 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.4903 19.961L2 10.4707M2 10.4707L11.4903 0.980469M2 10.4707L28 10.4704'
                  stroke='#171412'
                  strokeWidth='1.58261'
                />
              </svg>
            </span>
            <div className='pagination__links'>
              <span className='active'>1</span>
              <a href='#'>2</a>
              <span>...</span>
              <a href='#'>4</a>
            </div>
            <a href='#' className='pagination__btn-navigation pagination__btn-navigation--next'>
              Next
              <svg
                width='28'
                height='21'
                viewBox='0 0 28 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.4903 19.961L2 10.4707M2 10.4707L11.4903 0.980469M2 10.4707L28 10.4704'
                  stroke='#171412'
                  strokeWidth='1.58261'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ArticlesListSkeleton
