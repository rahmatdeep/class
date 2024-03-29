import express from "express"

const app = express()

import {BACKEND_URL} from "@repo/common/config"

app.get('/', (req, res)=>{
    res.json({msg: "Hello world!"})
})

app.listen(3030)