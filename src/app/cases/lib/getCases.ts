export async function getCases(){
    const response = await fetch(`http://localhost:3001/cases`, {
        next:{
            revalidate: 60
        }
    })
    return response.json();
  }
  