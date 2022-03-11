const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express()
const port = 8080;

const pagesPath = path.join(__dirname,'pages')
const commonPath = path.join(__dirname,'common')

app.set('view engine','hbs')
app.set('views', pagesPath)
hbs.registerPartials(commonPath)
app.use(express.static(pagesPath));
app.get('',(req,res)=>{
  res.render('home',{
    title: 'Home Page',
    description: 'Home content comes here...'
  })
})
app.get('/home',(req,res)=>{
  res.render('home',{
    title: 'Home Page',
    description: 'Home content comes here...'
  })
})
app.get('/features',(req,res)=>{
  res.render('features',{
    title: 'Features',
    description: 'Features content comes here...'
  })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    title: 'Contact us Page',
    description: 'Contact details comes here...'
  })
})
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('pages/index.html'));
// });
app.get('*',(req,res)=>{
  res.send('404 Page Not Found!')
})

app.listen(port, () => {
  console.log(`Sample app NodeJS - Murali at http://localhost:${port}`);
});




