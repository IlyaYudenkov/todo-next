'use client'

import React, { FC } from 'react'
import cl from './_CaseItem.module.scss'
import { ICase } from '@/shared/types/interfaces'
import Image from 'next/image';
import Xmark from '../../shared/assets/img/Krestiksvgpng.ru_.svg'




const CaseItem:FC<ICase> = ({id, userId, text, status }) => {

    const deleteTheCase = (id:number) => {
        console.log(id);
    }
    
  return (
    <li className={cl.caseItem}>
        <span>{status}</span>
        <span>{text}</span>
        <Image src={Xmark} alt="Xmark" width={30} height={30} onClick={() => deleteTheCase(id)}/>
    </li>
  )
}

export default CaseItem