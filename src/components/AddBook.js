import axios from 'axios'
import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes, useParams, Link, useNavigate} from 'react-router-dom'

const url = 'http://localhost:3000/book/'
const AddBook = () =>{
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title:"",
        author:"",
        desc:""
    })
    const handleCreate = (e) =>{
        e.preventDefault()
    
        axios.post(url+'add', book).then(r=>{console.log(r.data); setBook({
            title:"",
            author:"",
            desc:""
        });navigate('/')}).catch(e=>console.log(e))
    }
    const onChange = (e) =>{
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    return(
        <div>
            
            <div onClick={()=>{navigate('/')}}>go to list</div>
            <form onSubmit={handleCreate}>
                <table>
                    <tr>
                        <td>Title</td>
                        <td><input name='title' onChange={onChange}></input></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input name='author' onChange={onChange}></input></td>
                    </tr>
                    <tr>
                        <td>Desc</td>
                        <td><input name='desc' onChange={onChange}></input></td>
                    </tr>
                    <tr>
                    
                    </tr>
                    <input type='submit'></input>
                </table>
               
            </form>
        </div>
    )
}

export default AddBook