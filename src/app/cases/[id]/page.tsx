import React from 'react'
import { getCase } from './lib/getCase'
import LinkButton from '@/shared/UI/LinkButton/LinkButton'

type TCasePage = {
    params:{
        id: number
    }
}


export default async function CasePage ({params: {id}}: TCasePage) {
    const business = await getCase(id)

    return (
      <>
        <h1>Page of case {id}</h1>
        <p>{business.text}</p>
        <p>{business.status}</p>
        <LinkButton text='Edit case' path={`/cases/${id}/edit`}/>
      </>
      
    )
  }