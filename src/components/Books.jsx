import React, { useState, useEffect } from 'react'
import Book from './Book'

export default function Books() {
    const [books, setBooks]=useState([])
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
   
    return (
        <div>
            <div className='w-10/12 mx-auto border grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    books.map(book =><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
}
