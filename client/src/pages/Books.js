import React, { Component } from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";



export default class Books extends Component {

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

  render() {
    return (
      <div className="books">
<div className="middle my-3 container">
          <div className="row">
            <div className="div-md-6">
              
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
