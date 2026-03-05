// main job is to create the server

const express = require('express')
const  app = express()
const notes =[]
app.use(express.json())


app.post('/notes',(req,res)=>{

    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message: "Note created successfully"
    })
    
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:'Notes fetched successfully',
        notes:notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index =req.params.index
    delete notes[index]

    res.status(200).json({
        message:"Note Deleted Successfully",
        notes:notes
    })

               
})

module.exports = app

