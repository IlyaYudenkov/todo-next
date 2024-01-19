import React from 'react'
import { getCase } from './lib/getCase'
import LinkButton from '@/shared/UI/LinkButton/LinkButton'
import { ICase } from '@/shared/types/interfaces'

type TCasePage = {
    params:{
        id: number
    }
}


export default async function CasePage ({params: {id}}: TCasePage) {

    const business:ICase = await getCase(id)

    return (
      <>
        <h1>Page of case {id}</h1>
        <h3>{business.text}</h3>
        <h4>{business.status === true ? 'false' : 'false'}</h4>
        <LinkButton text='Edit case' path={`/cases/${id}/edit`}/>
      </>
      
    )
  }