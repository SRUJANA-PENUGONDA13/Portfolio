// in-built modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { spawn } = require("child_process")
const { Console } = require('console')

const app = express()
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
// Note If we not include this statement node js will not know from which folder it needs to load the files for css and js and img files
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
    console.log("Request Name: ",req.query.name)
    console.log("Request Email: ",req.query.email)
    console.log("Message: ",req.query.message)
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

app.listen(3000,()=>
{
  console.log("Server started")
})

//Use below command to run app.js when working with handlebars
// nodemon app.js -e js,hbs