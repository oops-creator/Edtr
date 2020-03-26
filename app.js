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
    if(req.body.save != undefined){
        filedata = req.body.text
        filename = req.body.save
        fs.writeFileSync(filename , req.body.text)
        
        res.render('index'  , {filename , filedata})
    }else{
        const newfile = req.body.new
        res.render('index',{filename:newfile} )
    }
    
    
})



app.listen(8010 , ()=>{
    console.log("the port is working")
})