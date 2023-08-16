import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import url from './constant'
// const url = 'http://localhost:3000/book/'


const BookCard = (props) => {
    const navigate = useNavigate()
    const removeBook = (id) => {
        axios.delete(url + 'del/' + id).then(r => { console.log(r); navigate(0) }).catch(e => console.log(e))

    }
    return (
        // <div  className="card-container">
        //     <Link to={`/${props.book._id}`}> {props.book._id}</Link>
        //     {/* {props.book._id} */}
        //     {props.book.title}
        //     {props.book.author}
        //     {props.book.desc}
        //     <div onClick={()=>{removeBook(props.book._id)}}>XX</div>
        // </div>

        <div class="list">
            <div class="card-container">
                <img
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Books"
                    height="200"
                />
                <div class="desc">
                    <h4><Link to={`/${props.book._id}`}> {props.book.title}</Link></h4>
                    <h4>{props.book.author}</h4>
                    <h4>{props.book.desc}</h4>
                    <div onClick={()=>{removeBook(props.book._id)}}>XX</div>
                </div>
            </div>
        </div>

    )


}

export default BookCard