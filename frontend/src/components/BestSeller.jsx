import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => {
                setBooks(data.slice(0,8));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {books.length > 0 ? (
                <BookCard books={books} headline="Best Sellers" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BestSeller;
