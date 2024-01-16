'use client'

import React, { FC, useEffect, useState } from 'react'
import cl from './_LinkButton.module.scss'
import Link from 'next/link'

interface ILinkButton{
    text: string,
    onclick?: () => void
}

const LinkButton:FC<ILinkButton> = ({text, onclick}) => {

    const [path, setPath] = useState<string>('/')

    useEffect(() => {
        text === 'Log out' && setPath('/signin')
        text === 'Create new case' && setPath('/new')
        text === 'Cases Page' && setPath('/cases')     
    },[text])

  return (
    <button className={cl.button} onClick={() => onclick}>
      <Link href={path} >
        {text}
      </Link>
    </button>
    
  )
}

export default LinkButton