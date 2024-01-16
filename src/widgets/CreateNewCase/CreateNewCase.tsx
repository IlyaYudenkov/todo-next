import Button from '@/shared/UI/Button/Button'
import Input from '@/shared/UI/Input/Input'
import { revalidatePath } from 'next/cache';
import {redirect} from 'next/navigation'

async function createCase(data: FormData){
    'use server';
    const {text} = Object.fromEntries(data)
    
    const response = await fetch('http://localhost:3001/cases', {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({text, userId: 1, status: 'false'})
    })

    revalidatePath('/cases')
    redirect('/cases');
}

export default function CreateNewCase() {
  return (
    <form action={createCase}>
        <Input type='text' placeholder='Enter the text' name='text' label=''/>
        <Button type='submit' text='Create'/>
    </form>

  )
}

