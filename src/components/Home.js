import { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from './Bookcard'
import url from './constant'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'



const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(url).then(r => { setBooks(r.data) }).catch(e => console.log(e))
    }, [])
    return (
        // <div>
        //     <h1>No of Books is {books.length}</h1>
        //     {books? books.map(book=><BookCard book={book}/>):""}
        //     {/* {books.map(book=><BookCard book={book}/>)} */}
        //     <div>
        //         <Link to='/add'>AddBook</Link>
        //     </div>
        // </div>

        <div className='BookList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Books List</h2>
                        <h1>No of Books is {books.length}</h1>
                    </div>

                    <div className='col-md-11'>
                        <div>
                            <Link to='/add'>AddBook</Link>
                        </div>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>

                <div className='list'>
                    {books ? books.map(book => <BookCard book={book} />) : ""}
                </div>
            </div>
        </div>
    )
}

export default Home