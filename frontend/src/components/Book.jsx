import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Book=()=>{
    const [books,setBooks]=useState([])
    
 useEffect(()=>{
axios.get("http://localhost:5000/books/getAll").then((result)=>{
    setBooks(result.data)
    
}).catch((err)=>console.log(err))
    },[])
    

    const handleDel=(id)=>{
        axios.delete(`http://localhost:5000/books/destroy/${id}`).then((res)=>{
            setBooks(elems=>elems.filter((e)=>e._id!==id))

        }).catch((err)=>{console.log(err)})
    }
    return(
        <div>
            <h1>Different books</h1>
            <div className="books">
            {books.map((book) => (
        <div className="book" key={book._id}>
          <h2>{book.category}</h2>
          <h4>{book.title}</h4>
           <img src={book.cover} alt="" />
          <p>{book.description}</p>
           <span>{book.price}</span> <br></br>

    <button className="delete" onClick={()=>handleDel(book._id)}>🗑️</button>
          <button className="update"><Link to={"/update"}>✏️</Link></button>

        </div>
      ))}
       </div>

       <button className="formbutton"><Link to="/add">Add new book</Link>
       </button>
        </div> 
    )

}


export default Book;