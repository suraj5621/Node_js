const express = require('express'); //returns a function
const app = express() //it retunrs an entire new object //entire instance


app.listen(8080,()=>{
    console.log("server connected at port 8080");
})