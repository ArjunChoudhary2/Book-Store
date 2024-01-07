import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  //delete a book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <Table hoverable className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.genre}</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <div className="flex">
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-7"
                  >
                    <FaEdit className=" text-lg" />
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    <FaDeleteLeft />
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooks;
