import express from "express";
import {Book} from "../models/bookModel.js"
const router = express.Router();
// route for Save a new book 
router.post("/", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({ message: "Send all the required fields like " })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// create route for ALL BOOKS FROM DATABASE with count 
router.get("/", async (request, response) => {
    try {
        const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: " error.message " })
    }
})

// to show detail about one perticular item then how to do it by its id 

router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id)
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: " error.message " })
    }
})
// here we are rout code to update book in database 
router.put("/:id", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({ message: "Send all the required fields like " })
        }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({ message: "Book not found " })
        }
        return response.status(200).send({ message: "Book is updated successfully" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "error.message" })
    }
});
// create a route for deleting book from data base 
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).send({ message: "Book not found " })
        }
        return response.status(200).send({ message: "Book is deleted successfully " })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: " error.message " });
    }
})
export default router;