import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setbooks]= useState([])
    useEffect(() =>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-4'>

            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            
        </div>
    );
};

export default Books;