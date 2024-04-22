'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './promo.scss'

const Promo = () => {
  return (
    <section className='promo'>
      <Swiper
        className='promo__swiper'
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ el: '.promo-pagination', enabled: true, clickable: true }}
        navigation={{ nextEl: '.promo__arrow-next', prevEl: '.promo__arrow-prev' }}
        spaceBetween={0}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop={true}
      >
        <SwiperSlide className='promo__slide promo__slide--pink'>
          <div className='promo__container container'>
            <div className='promo__img'>
              <picture>
                <source media='(max-width: 767px)' srcSet='/img/promo-banner-mobile-1.png' />
                <source media='(max-width: 1279px)' srcSet='/img/promo-banner-tablet-1.png' />
                <img src='/img/promo-banner-1.png' alt='' />
              </picture>
            </div>
            <div className='promo__wrapp'>
              <div className='promo__button-wrapper'>
                <a href='#' className='promo__button promo__butto--buy'>
                  где купить?
                </a>
                <a href='#' className='promo__button promo__butto--inst'>
                  инструкция
                </a>
              </div>
              <div className='promo__product product'>
                <h2>
                  {' '}
                  Kомфодерм<sup className='reg'>&reg;</sup> K
                </h2>
                <img src='/img/product-1.png' alt='' />
                <div className='product__info'>
                  <div className='product__info-text'>
                    <p>
                      Деликатно уменьшает воспаления, покраснения и&nbsp;зуд на&nbsp;коже&nbsp;
                      <sup>1, 2, 3</sup>
                    </p>
                  </div>
                  <div className='product__info-text'>
                    <p>
                      Удобство применения 1&nbsp;раз&nbsp;в&nbsp;сутки<sup>1</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='promo__slide promo__slide--orange'>
          <div className='promo__container container'>
            <div className='promo__img'>
              <picture>
                <source media='(max-width: 767px)' srcSet='/img/promo-banner-mobile-2.png' />
                <source media='(max-width: 1279px)' srcSet='/img/promo-banner-tablet-2.png' />
                <img src='/img/promo-banner-2.png' alt='' />
              </picture>
            </div>
            <div className='promo__wrapp'>
              <div className='promo__button-wrapper'>
                <a href='#' className='promo__button promo__butto--buy'>
                  где купить?
                </a>
                <a href='#' className='promo__button promo__butto--inst'>
                  инструкция
                </a>
              </div>
              <div className='promo__product product'>
                <h2>Кoмфодерм мазь</h2>
                <div>
                  <img src='/img/product-2.png' alt='' />
                </div>
                <div className='product__info'>
                  <div className='product__info-text'>
                    <p>
                      Лечение хронических&nbsp;<sup>4</sup> дерматозов&nbsp;<sup>5</sup>{' '}
                      у&nbsp;детей с&nbsp;4-х месяцев
                    </p>
                  </div>
                  <div className='product__info-text'>
                    <p>
                      Удобство применения 1&nbsp;раз&nbsp;в&nbsp;сутки<sup>1</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='promo__slide promo__slide--yellow promo__slide--height'>
          <div className='promo__container container'>
            <div className='promo__img'>
              <picture>
                <source media='(max-width: 767px)' srcSet='/img/promo-banner-mobile-3.png' />
                <source media='(max-width: 1279px)' srcSet='/img/promo-banner-tablet-3.png' />
                <img src='/img/promo-banner-3.png' alt='' />
              </picture>
            </div>
            <div className='promo__wrapp'>
              <div className='promo__button-wrapper'>
                <a href='#' className='promo__button promo__butto--buy'>
                  где купить?
                </a>
                <a href='#' className='promo__button promo__butto--inst'>
                  инструкция
                </a>
              </div>
              <div className='promo__product product'>
                <h2>Кoмфодерм M2</h2>
                <img src='/img/product-3.png' alt='' />
                <div className='product__info'>
                  <div className='product__info-text'>
                    <p>
                      Деликатно&nbsp;<sup>1,2</sup> лечит аллергию на&nbsp;коже лица&nbsp;
                      <sup>6,7</sup>
                    </p>
                  </div>
                  <div className='product__info-text'>
                    <p>
                      Дополнительный эффект увлажнения кожи&nbsp;<sup>8</sup>
                    </p>
                  </div>
                  <div className='product__info-text'>
                    <p>
                      Удобство применения 1&nbsp;раз&nbsp;в&nbsp;сутки<sup>1</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className='promo__wrapper-arrow'>
          <div className='promo__arrow-prev'>
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
          </div>
          <div className='promo__arrow-next'>
            <svg
              width='28'
              height='21'
              viewBox='0 0 28 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.5097 19.961L26 10.4707M26 10.4707L16.5097 0.980469M26 10.4707L0 10.4704'
                stroke='#171412'
                strokeWidth='1.58261'
              />
            </svg>
          </div>
        </div>
        <div className='promo-pagination'></div>
      </Swiper>
    </section>
  )
}

export default Promo
