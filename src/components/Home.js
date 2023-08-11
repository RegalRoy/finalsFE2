import { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from './Bookcard'
import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

const url = 'https://finalsbe2.onrender.com/book/'

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(url).then(r => { setBooks(r.data) }).catch(e => console.log(e))
    },[])
    return (
        <div>
            <h1>No of Books is {books.length}</h1>
            {books? books.map(book=><BookCard book={book}/>):""}
            {/* {books.map(book=><BookCard book={book}/>)} */}
            <div>
                <Link to='/add'>AddBook</Link>
            </div>
        </div>
    )
}

export default Home
