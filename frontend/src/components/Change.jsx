import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Find=()=>{
    const [books,setBooks]=useState([])
    const [_id,set_id]=useState("")
    const [category,setcategory]=useState("")
    const [title,settitle]=useState("")
    const [cover,setcover]=useState("")
    const [description,setdescription]=useState("")
    const [price,setprice]=useState(null)
    
const navigate=useNavigate()



   const handlePut=(id)=>{
    axios.put(`http://localhost:5000/books/upd/${id}`,{category,title,cover,description,price}).then((res)=>{
  setBooks(books.map((e)=>{
    if(e._id===id){
       return {...e,category,title,cover,description,price}
     } else {return e

        }
    }
  ))
  navigate("/")
    }).catch((err)=>{console.log(err)})
}
   


    return(
        <div className="form">
            <h1>update New Book</h1>
            <input type="text" placeholder="id" onChange={(e)=>set_id(e.target.value)} defaultValue={_id} />
            
            <input type="text" placeholder="title" onChange={(e)=>settitle(e.target.value)} defaultValue={title} />
            <input type="text" placeholder="cover" onChange={(e)=>setcover(e.target.value)} defaultValue={cover} />
            <input type="number" placeholder="price" onChange={(e)=>setprice(e.target.value)}  defaultValue={price}/>

<button className="formbutton" onClick={()=>{handlePut(_id)}}>update</button>
        </div>
    )

}


export default Find;