


const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');



// To  set the templates engines
app.set('view engine', 'hbs');


const templates_path = path.join(__dirname,'../templates/views');
const partials_Path = path.join(__dirname,'../templates/partials');

app.set('views', templates_path)
hbs.registerPartials(partials_Path)


// public Static path

// console.log(path.join(__dirname,'../public'));

const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath))



// Routing or Navigating the Page.
app.get('/', (req, res)=>{

    // res.send("Hello to Home Page....:)")
    res.render('index')


})

app.get('/about', (req, res)=>{

    
    // res.send("Welcome to About Page")
    res.render('about')

})


app.get('/weather', (req, res)=>{

    // res.send("It's a Weather Page. ....._.:)(:")
    res.render('weather')

})

app.get('*', (req, res)=>{

    // res.send("Oops!!  404 - Page Not Found...")
    res.render('404error',{
        errmsg : "Oops!!! Page Not Found."
    })


})


// Server Port or Hostname
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0'




app.listen(port, hostname, ()=>{
    console.log(`Server is Starting at ->  port 3000 . `);
} )


