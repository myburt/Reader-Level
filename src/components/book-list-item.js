import React, { Component } from "react";
import "../App.css";

const BookListItem = ({ book, classes }) => {
  return (
   <li className={"card col-md-3 card-container-1 "+book.level}>
    <div className="card-body">
      <div className="Book-title">{book.title}</div>
      <div className="book-level">Reader Level: {book.level}</div>
      <div className="book-author">{book.author}</div>
    </div>
    </li>
  );
};

export default BookListItem;
