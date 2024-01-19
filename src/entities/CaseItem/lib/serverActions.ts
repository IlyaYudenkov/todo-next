"use server";

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteTheCase(id: number) {
  
    await fetch(`http://localhost:3001/cases/${id}`, {
      method: "DELETE"
    })
  
    revalidatePath('/cases')
  }
  

export async function checkTheBox(id: number, checked: boolean) {
    
    const response = await fetch(`http://localhost:3001/cases/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status: checked })
    })

    revalidatePath('/cases')
    redirect('/cases')


  }
