console.log('hello world');
const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send('hello world express');
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`);
})