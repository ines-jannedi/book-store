const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/shopBooks";

const db= mongoose.connect(mongoUri).then(()=>{console.log("db is connected")}).catch((err)=>{console.log(err)})

const itemSchema = new mongoose.Schema({
   category:String,
    title:String,
    description: String,
    price: Number,
    cover:String
    
  });
  
  const item = mongoose.model("book", itemSchema);
  


  ///Queries
const getAll=()=>{
  return item.find({})
}

const getOne=(title)=>{
  return item.find({title:title})
}

const create=(category,title,description,price,cover)=>{
return item.insertMany({category:category,title:title,description:description,price:price,cover:cover})
}



const update=(id,title)=>{
 return item.findByIdAndUpdate(id, { title:title })
}

const destroy=(id)=>{
return item.findByIdAndDelete(id)
}
  module.exports = {item,getAll,create,getOne,update,destroy};
