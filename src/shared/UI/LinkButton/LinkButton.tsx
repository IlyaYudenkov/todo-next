'use client'

import React, { FC } from 'react'
import cl from './_LinkButton.module.scss'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface ILinkButton{
    text: string,
    path: string,
    onclick?: () => void
}

const LinkButton:FC<ILinkButton> = ({text, onclick, path}) => {

  const locale = useLocale()
  const linkPath = `/${locale}${path}`;
  

  return (
    <button className={cl.button} onClick={() => onclick}>
      <Link href={linkPath} >
        {text}
      </Link>
    </button>
    
  )
}

export default LinkButton