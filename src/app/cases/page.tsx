import CasesList from "@/widgets/CasesList/ui/CasesList"
import { Metadata } from "next"
import { getCases } from "./lib/getCases";



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