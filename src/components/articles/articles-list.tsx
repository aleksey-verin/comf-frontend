import './articles-list.scss'

const ArticlesList = () => {
  return (
    <section className='articles-grid'>
      <div className='container'>
        <ul className='articles-grid__list'>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/1-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/1-tablet.jpg'
                  />
                  <img src='./img/articles-page/1.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Экзема у детей</h3>
                <div className='articles-grid__description'>
                  Экзема&nbsp;&mdash; хроническое кожное заболевание, в&nbsp;основе которого лежит
                  воспаление. Проявляется сыпью разного вида, прежде всего...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/2-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/2-tablet.jpg'
                  />
                  <img src='./img/articles-page/2.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Аллергия на коже у ребенка</h3>
                <div className='articles-grid__description'>
                  По&nbsp;определению ВОЗ, аллергия&nbsp;&mdash; это реакция гиперчувствительности,
                  в&nbsp;основе которой лежат...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/3-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/3-tablet.jpg'
                  />
                  <img src='./img/articles-page/3.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Дерматит</h3>
                <div className='articles-grid__description'>
                  Контактный дерматит&nbsp;&mdash; это воспаление кожи в&nbsp;месте
                  непосредственного контакта с&nbsp;раздражителем. В&nbsp;зависимости&nbsp;от...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--two-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/4-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/4-tablet.jpg'
                  />
                  <img src='./img/articles-page/4.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Лечение нейродермита</h3>
                <div className='articles-grid__description'>
                  Нейродермит&nbsp;&mdash; воспалительное заболевание кожи, характеризующееся
                  чередованием периодов обострения и&nbsp;ремиссии 1. Для него свойственна
                  сезонность. Оно сопровождается типичной клинической картиной&nbsp;&mdash;
                  шелушением кожи,...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/5-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/5-tablet.jpg'
                  />
                  <img src='./img/articles-page/5.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Лечение дерматита на лице у взрослых</h3>
                <div className='articles-grid__description'>
                  Дерматит&nbsp;&mdash; это поражение участков кожи с&nbsp;воспалением,
                  развивающееся вследствие химических или физических факторов. Внешне...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/6-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/6-tablet.jpg'
                  />
                  <img src='./img/articles-page/6.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Аллергия на лице</h3>
                <div className='articles-grid__description'>
                  Красные пятна, сыпь, точки на&nbsp;лице могут быть проявлением воспаления. Увидев
                  раздражение и&nbsp;покраснение на&nbsp;лице, мы&nbsp;часто...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/7-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/7-tablet.jpg'
                  />
                  <img src='./img/articles-page/7.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>
                  Атопический дерматит&nbsp;&mdash; симптомы и&nbsp;лечение
                </h3>
                <div className='articles-grid__description'>
                  Атопический дерматит&nbsp;&mdash; аллергическое кожное заболевание. Основные
                  особенности заболевания: оно имеет...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
          <li className='articles-grid__item articles-grid__item--one-column'>
            <div className='articles-grid__wrap'>
              <div className='articles-grid__image'>
                <picture>
                  <source
                    media='(max-width: 767px)'
                    srcSet='./img/articles-page/8-mobile.jpg'
                  />
                  <source
                    media='(max-width: 1279px)'
                    srcSet='./img/articles-page/8-tablet.jpg'
                  />
                  <img src='./img/articles-page/8.jpg' alt='Экзема у детей' />
                </picture>
              </div>
              <div className='articles-grid__text'>
                <h3 className='articles-grid__title'>Дерматит</h3>
                <div className='articles-grid__description'>
                  Контактный дерматит&nbsp;&mdash; это воспаление кожи в&nbsp;месте
                  непосредственного контакта с&nbsp;раздражителем. В&nbsp;зависимости&nbsp;от...
                </div>
              </div>
              <a href='./article.html' className='button articles-grid__button'>
                Узнать больше
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ArticlesList
