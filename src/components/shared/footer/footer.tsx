import './footer.scss'
import Footnote from './footnote'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__nav'>
          <a href='#' className='footer__nav-logo'>
            <img src='/img/footer-logo.png' alt='' />
          </a>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Инструкция
              </a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Симптомы
              </a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Статьи
              </a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Вопрос-ответ
              </a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Где купить
              </a>
            </li>
            <li className='footer__nav-item'>
              <a className='footer__nav-link' href='#'>
                Политика конфиденциальности
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__contact'>
          <p>АО &laquo;АКРИХИН&raquo;</p>
          <p>
            105064, Россия, г. Москва, ул. Земляной Вал, д.&nbsp;9, Деловой центр
            &laquo;СИТИДЕЛ&raquo;, 12&nbsp;этаж.
          </p>
          <p>
            142450, Россия, Московская область, Богородский городской округ, г. Старая Купавна, ул.
            Кирова, д.&nbsp;29
          </p>
          <p>
            Телефон:
            <a href='tel:+74957213697' className='footer__phone'>
              +7 (495) 721-36-97
            </a>
            E-mail: <a href='mailto:info@akrikhin.ru'>info@akrikhin.ru</a> Сайт:{' '}
            <a href='https://www.akrikhin.ru/'>www.akrikhin.ru</a>
          </p>
        </div>
        <div className='footer__warning'>
          Если при применении лекарственных препаратов компании АО&nbsp;&laquo;АКРИХИН&raquo;
          у&nbsp;вас развивается нежелательная реакция, обязательно сообщите об&nbsp;этом, заполнив
          <a href='https://www.akrikhin.ru/product/farmakonadzor/'> форму на&nbsp;сайте компании</a>
          , или по&nbsp;телефонам:{' '}
          <a href='tel:+74957213697'>+7 (495) 721-36-97</a>,
          <a href='tel:+74957029503'>+ 7 (495) 702-95-03</a>. Также вы&nbsp;можете задать
          интересующий вас вопрос по&nbsp;препарату.
        </div>
        <div className='footer__rules'>
          <p>
            &copy;&nbsp;2022&nbsp;АО &laquo;АКРИХИН&raquo; ВСЕ ПРАВА ЗАЩИЩЕНЫ. КОМПАНИЯ ПОЛНОСТЬЮ
            ОТВЕЧАЕТ ЗА&nbsp;СОДЕРЖИМОЕ САЙТА. ИСПОЛЬЗОВАНИЕ ЛЮБЫХ МАТЕРИАЛОВ И&nbsp;ДАННЫХ САЙТА
            РАЗРЕШАЕТСЯ ТОЛЬКО С&nbsp;ПИСЬМЕННОГО СОГЛАСИЯ АДМИНИСТРАЦИИ САЙТА. САЙТ ПРЕДНАЗНАЧЕН
            ТОЛЬКО ДЛЯ ПОСЕТИТЕЛЕЙ ИЗ&nbsp;РОССИЙСКОЙ ФЕДЕРАЦИИ.
          </p>
          <p>
            Информация о&nbsp;препаратах, представленная на&nbsp;сайте, не&nbsp;должна
            использоваться для самостоятельной диагностики и&nbsp;лечения заболевания
            и&nbsp;не&nbsp;может служить заменой очной консультации врача
          </p>
          <p>
            Данные о&nbsp;наличии и&nbsp;ценах на&nbsp;лекарственные препараты предоставляются
            аптеками, которые несут ответственность за&nbsp;достоверность информации. Администрация
            сайта не&nbsp;несет ответственности за&nbsp;содержание публикуемых прайс-листов аптек.
            Информация на&nbsp;сайте не&nbsp;должна быть истолкована как призыв
            к&nbsp;неспециалистам самостоятельно приобретать или использовать описываемые продукты.
          </p>
          <p>РИМ- 20XX (год)- XXXX</p>
        </div>
        <div className='footer__disclaimer'>
          <picture>
            <source media='(max-width: 767px)' srcSet='/img/disclaimer-mob.svg' />
            <img src='/img/disclaimer.svg' alt='' />
          </picture>
        </div>
        <Footnote />
      </div>
    </footer>
  )
}

export default Footer
