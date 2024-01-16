import CasesList from "@/widgets/CasesList/ui/CasesList"
import { Metadata } from "next"


async function getCases(){
  const response = await fetch(`http://localhost:3001/cases`, {
      next:{
          revalidate: 60
      }
  })
  return response.json();
}

export const metadata: Metadata = {
  title: 'TodoNext | CasesPage',
  description: 'Generated by create next app',
}


export default async function CasesPage() {

  const cases = await getCases();
  return (
    <>
      <h1>TodoList of user Ilya Yudenkov</h1>
      <CasesList casesList={cases ? cases : []}/>
    </>
    
  )
}