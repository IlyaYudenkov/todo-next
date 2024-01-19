'use server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCase(data: FormData){
    
    const {text} = Object.fromEntries(data)
    
    const response = await fetch('http://localhost:3001/cases', {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({text, userId: 1, status: false})
    })

    revalidatePath('/cases')
    redirect('/cases');
}