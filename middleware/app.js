// pcr shrinkage
const express = require('express');
const app = express();


// app.use('/',(req,res)=>{
//     res.send("I am home")
// })


// app.use('/cat' , (req ,res)=>{
//     res.send("you cat");
// });


// root route
app.get('/',(req,res)=>{
    res.send('this is home page');
})

app.get('/cat',(req,res)=>{
    res.send('this is cat page');
})




// Universal get astric --> universal route ---> generaly use for error page

// app.get('*',(req,res)=>{
//     res.send('this is error page');
// })




// by default aap koi bhi request bhejte ho wo kon se method pr jaati hai ---> get





// nodemon install kro  tbb npm start se run hoga code or nodemon app.js se bhi run ho jayega 

app.listen(8080, ()=>{
    console.log('listening on port 8080');
});
