import { useState, useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes, useParams, Link} from 'react-router-dom'
import url from './constant'
// const url = 'http://localhost:3000/book/'
const Book = (props) =>{
    const {id} = useParams();
    const[book , setBook] = useState({})
    useEffect(()=>{
        axios.get(url+'getbook/'+id).then(r=>setBook(r.data)).catch(e=>console.log(e))
    },{})
    return(
        <div>
            {book._id}
            {book.title}
            <Link to={`/update/${book._id}`}>Update Book</Link>
        </div>
    )
}

export default Book