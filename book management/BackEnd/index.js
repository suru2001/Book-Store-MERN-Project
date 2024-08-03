import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();


// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Options 1: allow all origins with default of cors (*)
app.use(cors());
// Options 2: allow specific origins (custom)
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//    allowedHeaders: ["Content-type"]
//   })
// )

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack project ")
});
 
// use routes 
app.use('/books',booksRoute)

// mongoose connection done here 

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is Listing to port = ${PORT}`);
    });
  }).catch((error) => {
    console.error("Error connecting to MongoDB");
  })