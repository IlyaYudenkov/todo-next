import React from 'react'
import cl from './_Header.module.scss';
import LinkButton from '@/shared/UI/LinkButton/LinkButton';

const Header = () => {
  return (
    <header className={cl.header}>
            <LinkButton text='Log out' path='/signin'/>
            <LinkButton text='Cases Page' path='/cases'/>
            <LinkButton text='Create new case' path='/new'/>
     
    </header>
  )
}

export default Header