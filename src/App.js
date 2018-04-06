import React, { Component } from "react";
import MenuBar from "./components/menu-bar.js";
import BookList from "./components/book-list.js";
import "./App.css";

const hardCodeBooks = [
  { title: "Matilda", level: "A", author: "Roald Dahl", id: "0141301066" },
  {
    title: "From the Mixed-Up Files of Mrs. Basil E. Frankweiler",
    level: "E",
    author: "E. L. Konigsburg",
    id: "0744583276"
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    level: "J",
    author: "C. S. Lewis",
    id: "0060764899"
  },
  { title: "Bad Kitty", level: "S", author: "Nick Bruel", id: "1596430699" },
  {
    title: "Diary of a Wimpy Kid",
    level: "O",
    author: " Jeff Kinney",
    id: "0810993139"
  },
  {
    title: "Because of Winn-Dixie",
    level: "S",
    author: "Kate DiCamillo",
    id: "0763616052"
  },
  {
    title: "Fantastic Mr. Fox",
    level: "U",
    author: "Roald Dahl",
    id: "0375822070"
  },
  {
    title: "The Borrowers",
    level: "Y",
    author: "Mary Norton",
    id: "0152047379"
  },
  {
    title: "The Phantom Tollbooth",
    level: "I",
    author: "Norton Juster",
    id: "0394820371"
  }
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: hardCodeBooks
    };
  }

  render() {
    return (
      <div className="container">
        <MenuBar />

        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
