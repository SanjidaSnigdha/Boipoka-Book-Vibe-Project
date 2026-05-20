import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB, addWishBookToStoreDB } from '../Utility/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, publisher, category, review, yearOfPublishing, rating, totalPages} = singleBook || {};
    const handleMarkAsRead = id =>{
        // Store with Id
        // where to store
        // array or collection
        // if book already exist the show an alert
        // if book not exist then push in the collection or array

        MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})

        addToStoreDB(id)

    }

    const handleAddToWishList = id=>{
        addWishBookToStoreDB(id)
    }
    return (
        <div className='w-11/12 mx-auto flex justify-between mt-15 mb-15 gap-15'>
            <img className='w-572 h-135 p-20 mx-auto bg-gray-100 rounded-xl' src={image} alt="" />
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
            <p className='text-[#131313]70'>Number of Pages : <span className='font-semibold text-[#131313]'>{totalPages}</span></p>
            <p className='text-[#131313]70'>Publisher : <span className='font-semibold text-[#131313]'>{publisher}</span></p>
            <p className='text-[#131313]70'>Year of Publishing: <span className='font-semibold text-[#131313]'>{yearOfPublishing}</span></p>
            <p className='text-[#131313]70'>Rating: <span className='font-semibold text-[#131313]'>{rating}</span></p>
          </div>
         
         <div className='mt-4'>
            <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent m-2'>Mar as Read</button>
            <button onClick={()=>handleAddToWishList(id)} className='btn btn-info m-2'>Add to WishList</button>
         </div>
           </div>
        </div>
    );
};

export default BookDetails;