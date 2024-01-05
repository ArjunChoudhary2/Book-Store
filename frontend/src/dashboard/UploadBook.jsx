import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const UploadBook = () => {
  const bookGenre = [
    "Science Fiction",
    "ds",
    "Fantasy",
    "Horror",
    "Psychology",
    "History",
    "Classics",
    "Self Help",
    "Autobiography",
    "Children",
    "Travel",
    "Religion",
  ];
  const [selectedGenere, setSelectedGenere] = useState(bookGenre[0]);

  const handleGenre = (event) => {
    setSelectedGenere(event.target.value);
  };

  //handling form submit
  const handleUpload = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const genre = form.genre.value;
    const description = form.description.value;
    const pdfURL = form.pdfURL.value;

    const bookObj = {
      title,
      author,
      imageURL,
      genre,
      description,
      pdfURL,
    };
    console.log(bookObj);

    fetch("http://localhost:5000/upload-book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObj)
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Book Uploaded successfully");
      form.reset();
    });
  };

  

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>
      <form
        onSubmit={handleUpload}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          {/*First Row */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          {/*Second Row */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="genre" value="Book Category" />
            </div>
            <Select
              id="genre"
              name="genreName"
              className="w-full rounded"
              value={selectedGenere}
              onChange={handleGenre}
            >
              {bookGenre.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/*Third Row */}

        <div className="mb-2 block">
          <Label htmlFor="description" value="Book Description" />
        </div>

        <Textarea
          className="w-full"
          id="description"
          placeholder="Enter description"
          required
          rows={4}
        />

        {/*Forth Row */}

        <div className="mb-2 block">
          <Label htmlFor="pdfURL" value="Book Link" />
        </div>

        <TextInput
          className="w-full text-sm"
          id="pdfURL"
          placeholder="Enter Book Link"
          required
          sizing="lg"
        />

        <Button type="submit" color="gray" className="mt-5">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
