import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (

        <div className="hero bg-base-300 mt-6 h-70px">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl "
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up<br></br> your bookshelf</h1>
       <button className="btn btn-primary bg-[#23BE0A] border-0 text-[#FFFFFF]">View The List</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;