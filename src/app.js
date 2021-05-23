// in-built modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')

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
    url = 'https://personal-mail.herokuapp.com/'+'/'+'mail'+'/'+req.query.name+'/'+req.query.email+'/'+req.query.message
    request(url, (error,response)=>
    {
        res.render('thankyou')   
    }) 
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
