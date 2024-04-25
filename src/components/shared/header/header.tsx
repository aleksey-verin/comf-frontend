'use client'
import { useState } from 'react'
import Burger from './burger'
import './header.scss'
import Menu from './menu'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    document.body.classList.toggle('no-scroll')
  }

  return (
    <header className={`header ${openMenu ? 'header--open' : ''}`}>
      <div className='header__container container'>
        <Link className='header__logo' href='/'>
          <Image src={'/img/logo.png'} alt='' width={207} height={24} priority/>
        </Link>
        <nav className='header__nav nav'>
          <Menu />
          <div className='nav__buy'>
            <a className='nav__buy-link' href='#'>
              где купить?
            </a>
          </div>
        </nav>
        <Burger handleClick={toggleMenu} />
      </div>
    </header>
  )
}

export default Header
