import React, { Component } from 'react';
import { Input } from 'reactstrap';
import "../styles/Pricing.css";

let total = 0;

total = total.toFixed(2);

export default class Pricing extends Component {

  state = {
    pages: 0,
    books: 0,
    total: total
  }

  handlePriceChange = () => {
    total = 0;
    let pages = this.state.pages;
    let books = this.state.books;
    let rate = 0;

    if (pages > 249) {
      rate = 0.06;
    } else if (pages > 100 && pages < 250) {
      rate = 0.08;
    } else if (pages < 101) {
      rate = 0.1;
    } else {
      rate = 0;
    }

    if (pages % 2 !== 0) {
      pages = parseInt(pages, 10) + 1;
    }

    if (pages > 400) {
      pages = 400;
      this.setState({
        pages: 400
      })
    }

    if (pages > 0) {
      total = (pages * rate + 2.5) * books;
    }
    total = total.toFixed(2);
    this.setState({
      total: total
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, function () {
      this.handlePriceChange();
    });

  };

  render() {
    return (
      <div className="pricing">
        <div className="middle my-3 container">
          <h2>Pricing Calculator</h2>
          <form className="calculator">
            <div>
              <label htmlFor="pages"># of pages</label>
              <Input
                type="number"
                min="0"
                className="form-control d-inline-block"
                name="pages"
                id="pages"
                value={this.state.pages}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="pages"># of books</label>
              <Input
                type="number"
                min="0"
                className="form-control d-inline-block"
                name="books"
                id="books"
                value={this.state.books}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <p>Estimate: ${this.state.total}</p>

            </div>
          </form>
        </div>
      </div>
    )
  }
}
