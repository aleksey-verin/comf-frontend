import './pharmacies.scss'

const Pharmacies = () => {
  return (
    <section className='pharmacies'>
      <div className='pharmacies__container container'>
        <div className='pharmacies__content-text'>
          <h2 className='pharmacies__title title'>где купить</h2>
          <p className='pharmacies__text'>
            Вы&nbsp;можете приобрести препараты линейки Комфодерм<sup className='reg'>&reg;</sup>
            в&nbsp;аптеках вашего города и&nbsp;онлайн
          </p>
        </div>
        <ul className='pharmacies__list'>
          <li className='pharmacies__item'>
            <a href='#' className='phermacies__link'>
              <img src='./img/apteka/apteka.png' alt='pharmacies' />
            </a>
          </li>
          <li className='pharmacies__item'>
            <a href='#' className='phermacies__link'>
              <img src='./img/apteka/zdravcity.png' alt='pharmacies' />
            </a>
          </li>
          <li className='pharmacies__item'>
            <a href='#' className='phermacies__link'>
              <img src='./img/apteka/eapteka.png' alt='pharmacies' />
            </a>
          </li>
          <li className='pharmacies__item'>
            <a href='#' className='phermacies__link'>
              <img src='./img/apteka/aptekamos.png' alt='pharmacies' />
            </a>
          </li>
          <li className='pharmacies__item'>
            <a href='#' className='phermacies__link'>
              <img src='./img/apteka/zhivika.png' alt='pharmacies' />
            </a>
          </li>
        </ul>
        <div className='pharmacies__more-wrap'>
          <a className='pharmacies__more' href='#'>
            {' '}
            полный список аптек{' '}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pharmacies
