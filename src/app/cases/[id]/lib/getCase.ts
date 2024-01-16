export async function getCase(id:number){
    const response = await fetch(`http://localhost:3001/cases/${id}`, {
        next:{
            revalidate: 60
        }
    })
    return response.json();
}