const express=require("express")
const app=express()
const db=require("./database mongo/index.js")
const itemRoutes = require('./routes/itemroutes.js')
const cors=require("cors")



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books/", itemRoutes);

app.listen(5000,()=>{
    console.log("listening on port 5000");
})