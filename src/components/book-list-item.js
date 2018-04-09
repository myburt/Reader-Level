import React, { Component } from "react";
import "../App.css";

const BookListItem = ({ book, classes }) => {
  return (
    <div className="col-md-4">
      <li className={"card card-container-1 " + book.level}>
        <div className="card-body">
          <div className="book-level">Reader Level: {book.level}</div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">written by {book.author}</div>
        </div>
      </li>
    </div>
  );
};

export default BookListItem;
