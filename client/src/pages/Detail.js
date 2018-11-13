import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API.js";
import "../styles/Detail.css";

export default class Detail extends Component {

  state = {
    book: {}
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="detail">
        <div className="middle my-3 container">
          <div className="row">
            <div className="div-md-6">
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="div-md-6">
              <article>
                <h1>Synopsis</h1>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="div-md-6">
            <Link to="/books">← Back to Books</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
