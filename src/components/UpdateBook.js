import axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes, useParams,useNavigate, Link} from 'react-router-dom'

const url = 'http://localhost:3000/book/'


const UpdateBook =() =>{
    const {id} = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title:"",
        author:"",
        desc:""
    })
    const handleCreate = (e) =>{
        e.preventDefault()
    
        axios.put(url+'update/'+id, book).then(r=>{console.log(r.data); setBook({
            title:"",
            author:"",
            desc:""
        });navigate('/')}).catch(e=>console.log(e))
    }
    const onChange = (e) =>{
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    useEffect(()=>{
        axios.get(url+'getbook/'+id).then(r=>{setBook(r.data)})
    },{})
    return(
        <div>
            <Link to='/'>show book list</Link>
            <form onSubmit={handleCreate}>
                <table>
                    <tr>
                        <td>Title</td>
                        <td><input name='title' onChange={onChange} value={book.title}></input></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input name='author' onChange={onChange} value={book.author}></input></td>
                    </tr>
                    <tr>
                        <td>Desc</td>
                        <td><input name='desc' onChange={onChange} value={book.desc}></input></td>
                    </tr>
                    <tr>
                    
                    </tr>
                    <input type='submit'></input>
                </table>
               
            </form>
        </div>
    )
}

export default UpdateBook