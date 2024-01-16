const express = require("express")
const { createTodo, updateTodo } = require("./types")
const {todo} = require("./db")
const cors = require("cors")

app = express()
const port = 3000

app.use(cors());
app.use(express.json())

app.post('/todos', async(req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
    
})

app.get('/todos', async(req, res)=>{

    const todos  = await todo.find();
    res.json({
        todoData: todos
    })

})

app.put('/completed', async(req, res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }

    const updateTodo = await todo.update({_id: req.body.id},{completed: true})
    res.json({
        msg: "Todo is completed"
    })

})





app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})