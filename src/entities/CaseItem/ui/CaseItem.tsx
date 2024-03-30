"use client";

import React, { FC } from 'react'
import { useTransition } from "react";
import cl from './_CaseItem.module.scss'
import { ICase } from '@/shared/types/interfaces'
import Image from 'next/image';
import Xmark from '../../../shared/assets/img/Krestiksvgpng.ru_.svg'
import Link from 'next/link';
import { checkTheBox, deleteTheCase } from '../lib/serverActions';


const CaseItem: FC<ICase> = ({ id, text, status }) => {
  const [pending, startTransition] = useTransition()
  
  return (
    <li className={cl.caseItem}>

        <input type='checkbox' name='status' onChange={(e) => {

           startTransition(async() => {
             await checkTheBox(id, e.target.checked);
           })}}/>
   
      <Link href={`/cases/${id}`} >
        <span className={`${cl.text} ${status ? cl.completed : ''}`}>
          {text}
        </span>
      </Link>
      <form action={deleteTheCase.bind(null, id)}>
        <button type='submit'>
          <Image src={Xmark} alt="Xmark" width={30} height={30} />
        </button>
      </form>
    </li>
  )
}

export default CaseItem