const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser  =require('body-parser')
const fs = require('fs')

//---------------------------------------------------

const partialPath = path.join(__dirname , './templates/partials')
const pubDir = path.join(__dirname , './public')
const viewsPath = path.join(__dirname , './templates/views')
const app = express()

// --------------------------------------------------

hbs.registerPartials(partialPath)
app.set('view engine' ,'hbs')
app.set('views' , viewsPath)
app.use(express.static(pubDir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//---------------------------------------------------

app.get("" , (req , res)=>{
    res.render('index')
})

app.post("" , (req , res)=>{
    if(typeof req.body.save != undefined){
        fs.writeFileSync('file.txt' , req.body.text)
        filedata = req.body.text
        res.render('index'  , {filedata})
    }else{
   
    }
    
    
})



app.listen(8010 , ()=>{
    console.log("the port is working")
})