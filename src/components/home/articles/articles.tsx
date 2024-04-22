'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import './articles.scss'

const Articles = () => {

  return (
    <section className='articles'>
      <div className='articles__container container'>
        <div className='articles__wrapper'>
          <div className='articles__arrow-wrapper'>
            <div className='articles__arrow-prev'>
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
            <div className='articles__arrow-next'>
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
          <h2 className='articles__title title'>Полезные статьи</h2>
          <Swiper
            className='articles__swiper'
            modules={[Navigation]}
            watchSlidesProgress={true}
            navigation={{ nextEl: '.articles__arrow-next', prevEl: '.articles__arrow-prev' }}
            speed={800}
            slidesPerView={1}
            spaceBetween={6}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 16,

              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 53,

              },
            }}
          >
            <SwiperSlide className='articles__slide'>
              <a className='articles__link' href='#'>
                <img src='/img/article-1.jpg' alt='' />
                <h3>Экзема у детей</h3>
                <div>где купить?</div>
              </a>
            </SwiperSlide>
            <SwiperSlide className='articles__slide'>
              <a className='articles__link' href='#'>
                <img src='/img/article-2.jpg' alt='' />
                <h3>Аллергия на лице</h3>
                <div>где купить?</div>
              </a>
            </SwiperSlide>
            <SwiperSlide className='articles__slide'>
              <a className='articles__link' href='#'>
                <img src='/img/article-3.jpg' alt='' />
                <h3>Дерматит</h3>
                <div>где купить?</div>
              </a>
            </SwiperSlide>
            <SwiperSlide className='articles__slide'>
              <a className='articles__link' href='#'>
                <img src='/img/article-3.jpg' alt='' />
                <h3>Дерматит</h3>
                <div>где купить?</div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Articles
