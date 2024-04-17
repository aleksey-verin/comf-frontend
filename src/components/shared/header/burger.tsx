'use client'
import { useState } from "react"

const Burger = ({handleClick}:{handleClick: () => void}) => {

  return (
    <button onClick={handleClick} type='button' className='header__burger'>
      <span></span>
    </button>
  )
}

export default Burger
