const express = require("express")

const app = express()

app.use(express.json())

let number = 0
function increaseNumber(req, res, next){
    number++
    next()
}


app.get('/health-checkup',increaseNumber,function(req, res){
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if(!((username=="harkirat"&&password=="pass")&&(kidneyId == 1 || kidneyId == 2))){
            
        res.status(400).json({msg:"something is up with inputs"})
        
    }
    else{
        res.json({
            msg: "Your kidney is fine!"
        
    })
    }
  
})

app.get("/display-number",(req, res)=>{
    res.json({
        numberOfcalls: number
    })
})

app.listen(3000)