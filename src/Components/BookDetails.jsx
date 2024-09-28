import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
   const { bookId } = useParams();
    const book = books.find(book => bookId == book.bookId);

    const {bookName, image ,review, totalPages, category, tags, yearOfPublishing, publisher, author,rating} = book;
    const notify = () => toast.success('book added successfully');
    const notify1 = () => toast.success('added for wishlist');
    
    
    return (
        <div className='flex justify-between items-center mt-7 w-4/5 mx-auto gap-9 '>
           <img className='w-6/12 h-screen ' src={image} alt="" />
           <div className='flex flex-col gap-3 items-start'>
            <h1 className='text-3xl font-bold'>{bookName}</h1>
            <h4>by : {author}</h4>
            <hr  className='w-full'/>
            <p>{category}</p>
            <hr  className='w-full'/>
            <p><span>Review:</span> {review}</p>
            <div className='flex items-center gap-3'>
                {
                    tags.map((tag, idx) => <span key={idx} className='text-green-500 text-[12px] bg-[#23BE0A]/10 py-[7px] px-[16px] rounded-3xl' >{tag}</span>)
                }
             </div>
             <hr className='w-full' />
             <p>Number Of Pages: <span>{totalPages}</span></p>
             <p>Publisher: <span>{publisher}</span></p>
             <p>Year Of Publish: <span>{yearOfPublishing}</span></p>
             <p>rating: <span>{rating}</span></p>
             <div className='flex gap-4'>
                <button onClick={notify} className='btn'>read</button>
                <button onClick={notify1} className='btn'>Wishlist</button>
             </div>
           </div>
        </div>
    );
};

export default BookDetails;