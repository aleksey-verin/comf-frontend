import './article-promo.scss'

const ArticlePromo = () => {
  return (
    <section className='promo-article'>
      <div className='promo-article__image'>
        <picture>
          <source media='(max-width: 767px)' srcSet='/img/article/promo-mobile.png'/>
          <source media='(max-width: 1279px)' srcSet='/img/article/promo-tablet.png'/>
          <img src='/img/article/promo-desktop.png' alt='' />
        </picture>
      </div>
      <div className='promo-article__container container'>
        <div className='promo-article__info'>
          <h1 className='title promo-article__title'>
            Аллергия <br /> на&nbsp;коже у&nbsp;ребенка
          </h1>
          <ul className='promo-article__tags-list'>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_1' href='#content_1'>
                Причины аллергии на коже у ребенка
              </a>
            </li>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_2' href='#content_2'>
                Провоцирующие факторы
              </a>
            </li>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_3' href='#content_3'>
                Симптомы
              </a>
            </li>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_4' href='#content_5'>
                Диагностика аллергии
              </a>
            </li>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_5' href='#content_5'>
                Диета при аллергии
              </a>
            </li>
            <li className='promo-article__item'>
              <a data-navigation-article='#content_6' href='#content_6'>
                Лечение аллергии
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ArticlePromo
