import React from 'react'
import { Link } from 'react-router-dom';

export default function Book({book}) {
    const{ bookId, image, bookName, author, tags, category, rating, totalPages }=book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 shadow-xl border p-10">
                    <figure>
                        <img
                        className='h-[166px] border-4 border-black'
                        src={image}
                        alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            {
                            tags.map((tag, index)=><button key={index} className="btn btn-xs">{tag}</button>)
                            }
                        </div>
                        
                        <h2 className="card-title">{bookName}</h2>
                        <p>By: {author}</p>
                        <div className='flex'>
                            <p>{rating}</p>
                            <p>{category}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>   
    )
}
