import React, { use } from 'react';

const Book = ({singlebook}) => {
    const data = use(bookPromise);

    console.log(singlebook)
    return (
        <div>
            <h1>Single Book</h1>
        </div>
    );
};

export default Book;