'use client'
import { MouseEvent } from 'react'
import './questions.scss'

const Questions = () => {
  const toggleQuestions = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.parentNode as HTMLLIElement
    target.classList.toggle('questions__item-open')
  }

  return (
    <section className='questions' id='faq'>
      <div className='questions__conteiner container'>
        <h2 className='questions__title title'>Частые вопросы</h2>
        <div className='questions__wrapper'>
          <ul className='questions__list'>
            <li className='questions__item'>
              <div className='questions__subtitle' onClick={(e) => toggleQuestions(e)}>
                <h3>когда использовать Комфодерм?</h3>
                <div className='questions__arrow'>
                  <svg
                    width='21'
                    height='28'
                    viewBox='0 0 21 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.9415 16.5097L10.4512 26M10.4512 26L0.960937 16.5097M10.4512 26L10.4509 -4.14818e-07'
                      stroke='#171412'
                      strokeWidth='1.58261'
                    />
                  </svg>
                </div>
              </div>
              <div className='questions__answer'>
                Выбирайте такую одежду, ткань которой достаточно мягкая и&nbsp;позволяет коже
                &laquo;дышать&raquo;. Лучше всего подходят изделия из&nbsp;хлопка.
              </div>
            </li>
            <li className='questions__item'>
              <div className='questions__subtitle' onClick={(e) => toggleQuestions(e)}>
                <h3>с&nbsp;какого возраста можно использовать?</h3>
                <div className='questions__arrow'>
                  <svg
                    width='21'
                    height='28'
                    viewBox='0 0 21 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.9415 16.5097L10.4512 26M10.4512 26L0.960937 16.5097M10.4512 26L10.4509 -4.14818e-07'
                      stroke='#171412'
                      strokeWidth='1.58261'
                    />
                  </svg>
                </div>
              </div>
              <div className='questions__answer'>
                Выбирайте такую одежду, ткань которой достаточно мягкая и&nbsp;позволяет коже
                &laquo;дышать&raquo;. Лучше всего подходят изделия из&nbsp;хлопка.
              </div>
            </li>
            <li className='questions__item'>
              <div className='questions__subtitle' onClick={(e) => toggleQuestions(e)}>
                <h3>какие противопоказания?</h3>
                <div className='questions__arrow'>
                  <svg
                    width='21'
                    height='28'
                    viewBox='0 0 21 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.9415 16.5097L10.4512 26M10.4512 26L0.960937 16.5097M10.4512 26L10.4509 -4.14818e-07'
                      stroke='#171412'
                      strokeWidth='1.58261'
                    />
                  </svg>
                </div>
              </div>
              <div className='questions__answer'>
                Выбирайте такую одежду, ткань которой достаточно мягкая и&nbsp;позволяет коже
                &laquo;дышать&raquo;. Лучше всего подходят изделия из&nbsp;хлопка.
              </div>
            </li>
          </ul>
          <div className='questions__img'>
            <img src='/img/questions-baby.jpg' alt='baby' />
          </div>
        </div>
        <a className='questions__more'>узнать больше</a>
      </div>
    </section>
  )
}

export default Questions
