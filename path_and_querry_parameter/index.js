const express = require('express');
const app = express();

// path parameter
app.get('/r:subreddit',(req , res)=>{
    console.log(req.params);  // object 
    let {subreddit} = req.params;  // object -destructuring
    res.send(`  <h1> my path sub-reddit is ${subreddit} </h1>` );
})



// querry parameter
app.get('/search' , (req,res)=>{
    console.log(req.query); // object
    console.log(req.query.search); 
    let {search} = req.query; //destructure
    res.send(search);
    
} )



app.listen(8080 , ()=>{
    console.log("server is connected on port 8080");
})