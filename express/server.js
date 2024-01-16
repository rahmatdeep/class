const express = require("express")

const app = express()

const port = 3000

let users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", (req, res)=>{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/", (req, res)=>{
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res)=>{
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", (req, res)=>{
    const newKidney = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidney
    res.json({msg: "done"})
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})