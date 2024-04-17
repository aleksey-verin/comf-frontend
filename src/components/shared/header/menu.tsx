'use client'

import { useState } from "react"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <ul className='nav__list'>
      <li className='nav__item'>
        <button onClick={toggleMenu} className={`nav__link manual ${open ? 'manual-active' : ''}`}>
          инструкция
          <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.3332 6.16675L5.99984 0.833415L0.666504 6.16675'
              stroke='#171412'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div className={`tooltip ${open ? 'tooltip-active' : ''}`}>
          <ul>
            <li>
              <a href='./comfoderm.html'> Комфодерм® </a>
            </li>
            <li>
              <a href='./comfodermk.html'> Комфодерм® К </a>
            </li>
            <li>
              <a href='./comfodermm2.html'> Комфодерм® М2 </a>
            </li>
          </ul>
        </div>
      </li>
      <li className='nav__item'>
        <a className='nav__link' href='./#information' data-section='#information'>
          симптомы заболеваний
        </a>
      </li>
      <li className='nav__item'>
        <a className='nav__link' href='./articles-page.html'>
          статьи
        </a>
      </li>
      <li className='nav__item'>
        <a className='nav__link' href='./#faq' data-section='#faq'>
          вопрос-ответ
        </a>
      </li>
    </ul>
  )
}

export default Menu
