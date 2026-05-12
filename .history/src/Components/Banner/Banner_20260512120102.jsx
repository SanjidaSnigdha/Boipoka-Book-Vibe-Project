import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <diV>
            <h1>Hooooooooooooo</h1>
            <button className='btn btn-primary'>sent</button>
            </diV>
            <div>
               <img className='w-6/12 rounded-2' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;