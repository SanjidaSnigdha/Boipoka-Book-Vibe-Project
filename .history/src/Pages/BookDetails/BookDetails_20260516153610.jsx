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
            <img className='w-572 h-120 p-20 mx-auto bg-gray-100' src={image} alt="" />
           <div>
             <h5>{bookName}</h5>
         <p>Book by : {publisher}</p>

          <p className='border-t-1 border-0 border-b-1'>{category}</p>
           <div>
            <p><span className='font-bold text-[#131313]'>Review:</span>{review}</p>
           </div>
          <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>WishList</button>
           </div>
        </div>
    );
};

export default BookDetails;