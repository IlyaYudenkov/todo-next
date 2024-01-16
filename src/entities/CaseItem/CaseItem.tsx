import React, { FC } from 'react'
import cl from './_CaseItem.module.scss'
import { ICase } from '@/shared/types/interfaces'
import Image from 'next/image';
import Xmark from '../../shared/assets/img/Krestiksvgpng.ru_.svg'
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

async function deleteTheCase(id: number) {
  'use server'
  await fetch(`http://localhost:3001/cases/${id}`, {
    method: "DELETE"
  })

  revalidatePath('/cases')
}


const CaseItem: FC<ICase> = ({ id, text, status }) => {


  return (
    <li className={cl.caseItem}>
      <span>
        {status}
      </span>
      <Link href={`/cases/${id}`} className={cl.text}>
        {text}
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