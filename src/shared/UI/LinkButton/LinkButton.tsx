'use client'

import React, { FC } from 'react'
import cl from './_LinkButton.module.scss'
import Link from 'next/link'

interface ILinkButton{
    text: string,
    path: string,
    onclick?: () => void
}

const LinkButton:FC<ILinkButton> = ({text, onclick, path}) => {

  return (
    <button className={cl.button} onClick={() => onclick}>
      <Link href={path} >
        {text}
      </Link>
    </button>
    
  )
}

export default LinkButton