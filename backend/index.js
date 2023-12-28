const express = require("express");
const app = express();
const port = process.env.PORT || 5000; //for dynamic port used env variable
const cors = require("cors");

//cors middleware
app.use(cors());
app.use(express.json());

//MongoDB setup

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://bookstore_user:bookstore1user@book-store-mern.bhubzxl.mongodb.net/?retryWrites=true&w=majority";
//password
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //creating book collection
    const booksInventory = client.db("BookInventory").collection("books");

    //inserting sample book
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await booksInventory.insertOne(data);
      res.send(result);
    });

    //getting all books from database
    app.get("/all-books", async (req, res) => {
      const result = booksInventory.find();
      const allBooks = await result.toArray();
      res.send(allBooks);
    });

    //editing an existing book
    app.patch("/book/:id", async (req, res) => {
      const bookId = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(bookId) };

      const updateBook = {
        $set: {
          ...data,
        },
      };

      //if record doesn't exist create a new record
      const options = { upsert: true };

      const result = await booksInventory.updateOne(
        filter,
        updateBook,
        options
      );
      res.send(result);
    });

    //delete a book
    app.delete("/book/:id", async (req, res) => {
      const bookId = req.params.id;
      const filter = { _id: new ObjectId(bookId) };

      const result = await booksInventory.deleteOne(filter);
      res.send(result);
    });

    //to get a single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksInventory.findOne(filter);
      res.send(result);
    });

    //find by book category
    app.get("/book", async (req, res) => {
      let query = {};
      if (req.query?.genre) {
        query = { genre: req.query.genre };
      }

      const result = await booksInventory.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
