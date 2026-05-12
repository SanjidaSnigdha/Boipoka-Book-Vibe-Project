import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full mt-2'>
            <diV>
            <h1>Hooooooooooooo</h1>
            <button className='btn btn-primary'>sent</button>
            </diV>
            <div>
               <img className='w-3/12' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;