const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postsRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//routes middleware
app.use(postsRoutes);

const port = 8000;

const db_url = "mongodb+srv://dinuka:dinuka123@mernapp.j0en5go.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log("DB Connection Failed:", err);
});




app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});

