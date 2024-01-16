let users = [{
    name: "John",
    kidneys: [{
        healthy: true
    }]
}];

const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0
    for(let i=0; i<johnKidneys.length; i++){
        console.log(johnKidneys[i])
        if(johnKidneys[i].healthy){
            console.log("I came inside")
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    console.log(johnKidneys)
    console.log(numberOfKidneys.length);
    console.log(numberOfHealthyKidneys);