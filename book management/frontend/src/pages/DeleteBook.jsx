import React, { useState } from "react";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend .Please Check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h2 className="text-2xl my-4">
          Are you sure you want to delete this book ?
        </h2>
        <button
          className="p-4 bg-red-600 text-white m-8 "
          onClick={handleDeleteBook}
        >
          yes,Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
