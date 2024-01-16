// function getAnimalData(){
    // fetch("https://fakerapi.it/api/v1/persons")
    // .then((response)=>{
        // response.json()
        // .then((finalData)=>{
            // console.log(finalData)
        // })
        // 
    // })
    // 
// }

async function getAnimalData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json()
    console.log(finalData)
}