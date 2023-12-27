import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

export const Shop = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center"> All Books are here</h2>
      <div className="grid gap-6 my-12 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 grid-cols-1">
        {currentBooks.map((book, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center">
              <img
                src={book.imageURL}
                alt={book.title}
                className="h-96 w-auto mb-4 object-cover"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {book.title}
              </h5>
              <div className="description-container">
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {book.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        {Array.from({ length: Math.ceil(books.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 py-2 px-4 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
