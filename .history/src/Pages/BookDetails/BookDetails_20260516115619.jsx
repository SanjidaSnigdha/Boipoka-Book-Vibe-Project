import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId == id);
    return (
        <div>
            <h1>Book Details</h1>
        </div>
    );
};

export default BookDetails;