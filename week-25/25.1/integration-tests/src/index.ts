import express from "express"
import { prismaClient } from "./db"

export const app = express()
app.use(express.json())

app.post("/sum", async(req, res) => {
    const a = req.body.a
    const b = req.body.b

    if(a > 10000000 || b > 1000000){
        res.status(422).json({
            message: "Sorry we don't support big numbers"
        })
        return
    }
    const result = a + b;

    const request = await prismaClient.request.create({
        data: {
            a,
            b,
            answer: result,
            type: "ADD"
        }
    })

    res.json({ answer: result, id: request.id})
})
