import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footerr.jsx'

const Book = (props) => {
    const [books, setBooks] = useState([])
    const [search, setsearch] = useState("")
    const [onebook, setonebook] = useState("")

    const [_id,set_id]=useState("")
    

    useEffect(() => {
        axios.get("http://localhost:5000/books/getAll").then((result) => {
            setBooks(result.data)

        }).catch((err) => console.log(err))
    }, [])

    const navigate = useNavigate()


    const handelSearch = (title) => {
        axios.get(`http://localhost:5000/books/getone/${title}`).then((res) => {
            setonebook(res.data)
            props.setquery(res.data)
            
            navigate("/onebook")
        }).catch((err) => { console.log(err) })

    }

   
    const handleDel = (id) => {
        axios.delete(`http://localhost:5000/books/destroy/${id}`).then((res) => {
            setBooks(elems => elems.filter((e) => e._id !== id))

        }).catch((err) => { console.log(err) })
    }


    
    return (

        <div>
            
            <input className="form" type="text" placeholder="ur book" onChange={(e) => setsearch(e.target.value)} />
            <button  onClick={() => handelSearch(search)}>search</button>

            <h1>Different books</h1>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book._id}>
                        <div className="book-box">
                            <h2>{book.category}</h2>
                            <h4>{book.title}</h4>
                            <img src={book.cover} alt="" />
                            <p>{book.description}</p>
                            <span>{book.price}</span> <br></br>



                            <span className="material-symbols-outlined delete" onClick={() => handleDel(book._id)}>delete</span>

                            <Link to={"/update"}><span className="material-symbols-outlined update" >edit </span></Link>
                        </div>


                    </div>
                ))}
            </div>

            <button className="formbutton"><Link to="/add">Add new book</Link>
            </button> <br/>


            
            <>
            
           </>
        </div>
    )

}


export default Book;