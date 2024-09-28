import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
    const {bookName,image, tags, author, category, rating}= book;
    return (
        <div className='flex flex-col gap-4 border border-black rounded-xl p-5 cursor-pointer transition hover:scale-105'>
            
                <img className='h-[230px]' src={image} alt={bookName} />
                <div className='flex items-center gap-3'>
                {
                    tags.map((tag, idx) => <span key={idx}>{tag}</span>)
                }
                </div>
                <h3>{bookName}</h3>
                <h4>by: {author}</h4>
                <div className='flex items-center justify-between'>
                <p> {category}</p>
                <p className='flex gap-3 items-center'>{rating} <FaRegStar/></p>
                </div>
                
                
            
        </div>
    );
};

export default Book;