const express = require("express");
const z = require("zod")

const schema = z.array(z.number())

const app = express()
app.use(express.json())
app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    const kidneyLength = kidneys.length;

    res.send({response});
})

app.listen(3000, ()=>{
    console.log(`listening to 3000`)
})