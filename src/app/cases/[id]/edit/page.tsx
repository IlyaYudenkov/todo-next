import Button from '@/shared/UI/Button/Button'
import Input from '@/shared/UI/Input/Input'
import React from 'react'
import { getCase } from '../lib/getCase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type TCasePage = {
    params:{
        id: number
    }
  }




export default async function EditCasePage({params:{id}}:TCasePage) {

    const business = await getCase(id)

    async function updateCase(data: FormData){
        'use server'
          
        const { text } = Object.fromEntries(data);
          
        const response = await fetch(`http://localhost:3001/cases/${id}`, {
          method: "PATCH",
          headers: {
              'Content-Type': 'application/json',
        },
          body: JSON.stringify({text, userId: 1, status: 'false'})
        })
        revalidatePath('/cases')
        revalidatePath(`/cases/${id}`)
        redirect('/cases')
      }
    
  return (
    <form action={updateCase}>
        <Input label='' name='text' type='text' placeholder='Enter the new text' defaultValue={business.text}/>
        <Button text='Update' type='submit'/>
    </form>
  )
}

