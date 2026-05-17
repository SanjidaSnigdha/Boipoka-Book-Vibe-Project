import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, publisher, category} = singleBook;
    return (
        <div className='w-2/3 mx-auto flex justify-between'>
            <img className='w-48' src={image} alt="" />
           <div>
             <h5>{bookName}</h5>
         <p>Book by : {publisher}</p>
           <div className="divider divider-horizontal divider-end">End</div>

          <p>{category}</p>
            <div className="divider divider-horizontal divider-end">End</div>

          <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>WishList</button>
           </div>
        </div>
    );
};

export default BookDetails;