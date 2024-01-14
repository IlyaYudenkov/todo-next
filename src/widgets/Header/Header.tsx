import React from 'react'
import cl from './_Header.module.scss';
import LinkButton from '@/shared/UI/LinkButton/LinkButton';

const Header = () => {
  return (
    <header className={cl.header}>
            <LinkButton text='Log out'/>
            <LinkButton text='MainPage'/>
            <LinkButton text='Create new case'/>
     
    </header>
  )
}

export default Header