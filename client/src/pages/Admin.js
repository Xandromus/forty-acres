import React, { Component } from 'react';
import API from "../utils/API.js";
import { Link } from "react-router-dom";
import { Input } from 'reactstrap';
import "../styles/Admin.css";

export default class Admin extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="admin">
        <div className="middle my-3 container">
          <div className="row">
            <div className="div-md-6">
              <form>
                <Input
                  className="book-input"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  className="book-input"
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <Input
                  className="book-input"
                  type="textarea"
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <button
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
              </button>
              </form>
            </div>
            <div className="col-md-6 col-sm-12">
              {this.state.books.length ? (
                <ul>
                  {this.state.books.map(book => (
                    <li key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <i className="delbtn fa fa-trash" onClick={() => this.deleteBook(book._id)}></i>
                    </li>
                  ))}
                </ul>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
