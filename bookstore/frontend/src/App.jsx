import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
function App() {
  let [books,setBooks] = useState([]);

  let getAllBooks = async()=>{
     let books = await axios.get('http://localhost:8080/books');
     console.log(books.data)
     setBooks(books.data)
  }

  useEffect(function(){getAllBooks()},[])
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-warning p-2">
         <a href="" className="navbar-brand">Asim's Bookstore</a>
         <ul className='navbar-nav ms-auto'>
           <li>
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Authors
          </a>  
          <ul className="dropdown-menu">
            {
              books.map(function(book){
                return(
                  <div>
                     <li><a className="dropdown-item" href="#">{book.author}</a></li>
                  </div>
                )
              })
            }
            
          </ul>
           </li>
         </ul>
      </nav>
       <header>
       <h1>Welcome to Bookstore</h1>
       </header>
        <hr />
    <div className='container'>
    <div className='row'>
    {
        books.map(function(book){
            return(
              <div className='col-sm-3'>
                  {book.image? <img src={book.image}/>
                  :<img className='img-fluid'  src="https://img.freepik.com/free-vector/sticker-design-with-empty-book-isolated_1308-60922.jpg" />}
                  <h4>{book.book_name}</h4>
                  <h5>Author: {book.author} </h5>
                  <p>Price: {book.book_price}</p>
                  <p>Version: {book.edition}</p>
              </div>
            )
        })
      }
    </div>
    </div>
    </div>

  );
}

export default App;
