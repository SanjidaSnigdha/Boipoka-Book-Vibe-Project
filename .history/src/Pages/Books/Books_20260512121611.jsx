import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("booksData.json")
        .then(res=>res.json)
    },[])
    return (
        <div>
            <h1>book</h1>
        </div>
    );
};

export default Books;