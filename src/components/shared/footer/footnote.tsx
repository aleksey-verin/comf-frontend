'use client'

import { useState } from 'react'
import FootnoteContent from './footnote-content'

const Footnote = () => {
  const [open, setOpen] = useState(true)
  const toggleFootnote = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className='footer__footnote footnote'>
      <button className='footnote__button' onClick={toggleFootnote}>
        {open ? 'Скрыть сноски' : 'Раскрыть сноски'}
      </button>
      {open && <FootnoteContent />}
    </div>
  )
}

export default Footnote
