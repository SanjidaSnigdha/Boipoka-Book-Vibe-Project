import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, publisher, category, review} = singleBook;
    return (
        <div className='w-11/12 mx-auto flex justify-between mt-15 mb-15 gap-15'>
            <img className='w-572 h-120 p-20 mx-auto bg-gray-100 rounded-xl' src={image} alt="" />
           <div className='m-2'>
             <h5 className='font-bold text-[#131313] text-2xl'>{bookName}</h5>
         <p className='font-medium text-[#131313]80'>Book by : {publisher}</p>
         <div>
            <p className='text-base-700'><span className='font-bold text-[#131313]'>Review:</span>{review}</p>
         </div>
          <p className='border-t-1 border-0 border-b-1'>{category}</p>
           <div>
           </div>
          <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>WishList</button>
           </div>
        </div>
    );
};

export default BookDetails;