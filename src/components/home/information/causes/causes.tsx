import './causes.scss'

const Causes = () => {
  return (
    <section className='causes'>
      <div className='container causes__container'>
        <h2 className='causes__title title--white title'>
          <span>Причины заболевания</span>
        </h2>
        <div className='causes__wrapper'>
          <ul data-tab-content='tab_1' className='causes__list'>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>ингаляционные аллергены</p>
                <span>(трение, давление, экстремальные температуры);</span>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>химические и физические воздействия;</p>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>пищевые продукты;</p>
                <p>стресс;</p>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инфекции;</p>
                <p>неблагоприятные метеоусловия;</p>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инсоляция;</p>
                <p>
                  наследственность<sup>10, 11</sup>
                </p>
              </div>
            </li>
          </ul>
          <ul data-tab-content='tab_2' className='causes__list hidden'>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>физические причины</p>
                <span>(трение, давление, экстремальные температуры);</span>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>химические и физические воздействия;</p>
                <span>(кислоты, щелочи, растения);</span>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>металлы;</p>
                <p>косметические средства;</p>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>продукты питания;</p>
                <p> лекарственные препараты;</p>
              </div>
            </li>
            <li className='causes__item' data-animate-tab>
              <div className='causes__item-wrap'>
                <p>инсектициды;</p>
                <p>
                  парфюмерия<sup> 12,13</sup>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Causes
