import React, { Component } from "react";
import MenuBar from "./components/menu-bar.js";
import BookList from "./components/book-list.js";
import WelcomeMessage from "./components/welcome-message.js";
import TestBooks from "./data/test-books.js";
import "./App.css";

let groupedBooks = TestBooks;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: TestBooks[1],
      currentList: groupedBooks[0]
    };
  }

  render() {
    return (
      <React.Fragment>
        <MenuBar />
        <div  className="container" id="main-contain">
          <WelcomeMessage />

          <BookList books={this.state.books} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
