import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
// allow to add data in data base 
app.use(express.json());

app.get ("/",(request ,response)=>{
console.log(request);
return response.status(234).send("Welcome to MERN stack project ")
});

// route for Save a new book 
app.post("/books", async (request,response)=>{
try {
   if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
   ){
      return response.status(400).send({message:"Send all the required fields like "})
   }
   const newBook ={
      title:request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear
   }
   const book = await Book.create(newBook);
   return response.status(201).send(book) ;
} catch (error) {
   console.log(error.message);
   response.status(500).send({message : error.message})
}
})

// create route for ALL BOOKS FROM DATABASE with count 
app.get("/books", async (request, response) => {
   try {
      const books =await Book.find({})
      return response.status(200).json({
         count : books.length,
         data: books
      });
   } catch (error) {
      console.log(error.message);
      response.status(500).send({message :" error.message "})
   }
})

// to show detail about one perticular item then how to do it by its id 

app.get("/books/:id", async (request, response) => {
   try {
      const {id} = request.params;
      const book =await Book.findById(id)
      return response.status(200).json(book);
   } catch (error) {
      console.log(error.message);
      response.status(500).send({message :" error.message "})
   }
})
// here we are rout code to update book in database 
app.put("/books/:id",async(request, response)=>{
   try {if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
   ){
      return response.status(400).send({message:"Send all the required fields like "})
   }
      const {id} =request.params;
      const result =await Book.findByIdAndUpdate(id, request.body );

      if(!result){
         return response.status(404).send({message :"Book not found "})
      }
      return response.status(200).send({message:"Book is updated succesfully"});
   } catch (error) {
      console.log(error.message);
      response.status(500).send({message:"error.message"})
   }
});
// createw a route for deleting book from data base 

  // mongoose connection done here 

 mongoose
 .connect(mongoDBURL)
 .then(()=>{
   console.log("Connected to MongoDB");
   app.listen (PORT ,()=>{
      console.log(`App is Listing to port = ${PORT}`);
   });
 }).catch((error)=>{
   console.error("Error connecting to MongoDB");
 })