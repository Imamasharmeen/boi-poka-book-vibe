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
            <div className='w-10/12 border'>
                {
                    books.map(book =><Book book={book}></Book>)
                }
            </div>
        </div>
    )
}
