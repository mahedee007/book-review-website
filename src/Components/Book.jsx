import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookName,image, tags, author, category, rating, bookId}= book;
    return (
        <Link to={`/book/${bookId}`} className='flex flex-col gap-4 border border-black rounded-xl p-5 cursor-pointer transition hover:scale-105'>
            
                <img className='h-[230px]' src={image} alt={bookName} />
                <div className='flex items-center gap-3'>
                {
                    tags.map((tag, idx) => <span key={idx} className='text-green-500 text-[12px] bg-[#23BE0A]/10 py-[7px] px-[16px] rounded-3xl' >{tag}</span>)
                }
                </div>
                <h3 className='text-2xl font-extrabold'>{bookName}</h3>
                <h4 className='font-medium'>by: {author}</h4>
                <div className='flex items-center justify-between font-medium'>
                <p> {category}</p>
                <p className='flex gap-3 items-center'>{rating} <FaRegStar/></p>
                </div>
                
                
            
        </Link>
    );
};

export default Book;