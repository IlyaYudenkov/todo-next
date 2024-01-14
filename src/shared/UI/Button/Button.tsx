import React, { FC } from 'react';
import cl from './_Button.module.scss'

interface IButton{
    text?: string;
    type?: string,
    children?: React.ReactNode
}

const Button:FC<IButton> = ({children, text, type = 'submit'}) => {
  return (
    <button className={cl.button} type='submit'>
        {text}
        {children}
    </button>
  )
}

export default Button