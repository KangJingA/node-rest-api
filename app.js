const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const postsRoute = require('./routes/posts');


// middlewares: functions that execute when the route is 'hit'
// .use method
// specify callback to execute for specific routes
// no callback -> hit all routes
// app.use('/posts', (data) => {
//     console.log("this is the middleware running.")
// })
app.use(express.text())
app.use(express.json()); // dont use body parser anymore
// routes

app.use('/posts', postsRoute);
app.get('/', (req,res)=>{
    res.send("we are on home");
})

// connect to db 
const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to DB")
);

// listen 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server is running on port " + port));