//Express server 

const express = require('express')


const app = express();

app.get('/', (req,res) => {
 return res.send('You are on home page');
})

app.get('/about', (req,res) => {
    return res.send(`Hi ${req.query.name} ou are on about page`);
   })
   

    app.listen(8000 , () => console.log('server has started') )