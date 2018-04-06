import React, { Component } from "react";
import BookListItem from "./book-list-item.js";
import "../App.css";

const BookList = props => {
  const bookItems = props.books.map(book => {
    return <BookListItem book={book} />;
  });

  return (
    <div class="row">
      {bookItems}
    </div>
  );
};

export default BookList;
