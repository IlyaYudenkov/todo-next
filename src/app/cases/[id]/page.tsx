import React from 'react'

async function getCase(id:string){
    const response = await fetch(`http://localhost:3001/cases/${id}`, {
        next:{
            revalidate: 60
        }
    })
    return response.json();
}

type TCasePage = {
    params:{
        id: string
    }
}


export default async function CasePage ({params: {id}}: TCasePage) {
    const business = await getCase(id)

    return (
      <>
        <h1>Page of case {id}</h1>
        <p>{business.text}</p>
        <p>{business.status}</p>
      </>
      
    )
  }