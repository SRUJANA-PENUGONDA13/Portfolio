// in-built modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { spawn } = require("child_process")
const { Console } = require('console')

const app = express()
const port = process.env.PORT || 3000
// Express path config
const publicDirectoryPath = path.join(__dirname,'../public')
const utilsDirectoryPath = path.join(__dirname,'../utils/gmail')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialssDirectoryPath = path.join(__dirname, '../templates/partials')

//Setting View Engine
app.set('views', viewsDirectoryPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialssDirectoryPath)

//Serving up Static Applications
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>
{
    res.render('index')
   
})
app.get('/home',(req,res)=>
{
    res.render('home')  
})
app.get('/about',(req,res)=>
{
    res.render('about')
})
app.get('/skills',(req,res)=>
{
    res.render('skills')
   
})
app.get('/projects',(req,res)=>
{
    res.render('projects',{'name':"Srujana"})
   
})
app.get('/experience',(req,res)=>
{
    res.render('experience')
})
app.get('/contact',(req,res)=>
{
    res.render('contact')
   
})
app.get('/sendEmail',(req,res)=>
{
    const childPython = spawn('python',['./utils/gmail/send_mail.py',req.query.name,req.query.email,req.query.message])
    childPython.stdout.on('data',(data) => 
    {
        console.log(`stdout: ${data}`);
    })
    childPython.stderr.on('data',(data) => 
    {
        console.log(`stderr:${data}`)
    })
    childPython.on('close',(code) => 
    {
        console.log(`Child process got closed:${code}`)
    })

    res.render('thankyou')
   
})
//Error messgaes for invalid pages
app.get('*',(req,res)=>
{
    res.send("404 Page Not Found")
})

app.listen(port,()=>
{
  console.log("Server started")
})
