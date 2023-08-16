import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Book from './components/Book'
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Test 2</h1>
     
      <div>
        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='/:id' element={<Book />}></Route>
          <Route path='/add' element={<AddBook />}></Route>
          <Route path='/update/:id' element={<UpdateBook />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
