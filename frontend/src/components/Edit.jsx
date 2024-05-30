import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Edit=()=>{
    const [books,setBooks]=useState([])
    const [category,setcategory]=useState("")
    const [title,settitle]=useState("")
    const [cover,setcover]=useState("")
    const [description,setdescription]=useState("")
    const [price,setprice]=useState(null)
    
const navigate=useNavigate()
   const handlePost=()=>{
    axios.post("http://localhost:5000/books/create",{category,title,cover,description,price}).then((res)=>{
  setBooks(res.data)
  navigate("/")
    }).catch((err)=>{console.log(err)})
    
   }


    return(
        <div className="form">
            <h1>add New Book</h1>
            <input type="text" placeholder="category" onChange={(e)=>setcategory(e.target.value)} defaultValue={category}/>
            <input type="text" placeholder="title" onChange={(e)=>settitle(e.target.value)} defaultValue={title} />
            <input type="text" placeholder="cover" onChange={(e)=>setcover(e.target.value)} defaultValue={cover} />
            <input type="text" placeholder="description" onChange={(e)=>setdescription(e.target.value)} defaultValue={description}/>
            <input type="number" placeholder="price" onChange={(e)=>setprice(e.target.value)}  defaultValue={price}/>

<button  className="formbutton" onClick={handlePost}>➕</button>
        </div>
    )

}


export default Edit;