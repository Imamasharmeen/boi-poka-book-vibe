import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {
    const { bookId }= useParams()
    const data = useLoaderData()
    const id= parseInt(bookId)
    //console.log(data)
    const book=data.find(book=> book.bookId === id)
  return (
    <div>
        <h1>BookDetaILS:{bookId}</h1>
    </div>
  ) 
}
