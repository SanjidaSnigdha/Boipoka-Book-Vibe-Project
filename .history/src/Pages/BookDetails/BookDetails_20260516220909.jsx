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
           <div>
             <h5 className='font-bold text-[#131313] text-2xl'>{bookName}</h5>
         <p className='font-medium text-[#131313]80 mt-2'>Book by : {publisher}</p>
         <div>
            <p className='text-base-700 mt-2'><span className='font-bold text-[#131313]'>Review:</span>{review}</p>
         </div>

          <div className='divider'>
     <p className='mt-4 mb-4'>{category}</p>

          </div>

          <div className='flex gap-10 mt-4'>
           <p className='font-bold text-[#131313]'>Tag</p>
           <p className='text-[#23BE0A] font-bold'>#Young Adult</p>
           <p className='text-[#23BE0A] font-bold'>#Identity</p>
          </div>
         
         <div className='mt-4'>
            <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>WishList</button>
         </div>
           </div>
        </div>
    );
};

export default BookDetails;