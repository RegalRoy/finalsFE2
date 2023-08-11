import {BrowserRouter, Route, Routes, Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

const url = 'https://finalsbe2.onrender.com/book/'


const BookCard = (props) =>{
    const navigate=useNavigate()
    const removeBook =(id) =>{
        axios.delete(url+'del/'+id).then(r=>{console.log(r);navigate(0)}).catch(e=>console.log(e))

    }
    return(
        <div>
            <Link to={`/${props.book._id}`}> {props.book._id}</Link>
            {/* {props.book._id} */}
            {props.book.title}
            {props.book.author}
            {props.book.desc}
            <div onClick={()=>{removeBook(props.book._id)}}>XX</div>
        </div>
    )
}

export default BookCard
