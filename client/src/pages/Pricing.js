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

    console.log(pages, books, rate, total);

    if (pages > 249) {
      rate = 0.06;
      console.log(rate);
    } else if (pages > 100 && pages < 250) {
      rate = 0.08;
      console.log(rate);
    } else if (pages < 101) {
      rate = 0.1;
      console.log(rate);
    } else {
      rate = 0;
      console.log(rate);
    }

    total = (pages * rate + 2.5) * books;
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

  // updatePrice = () => {
  //   console.log(this);
  //   this.handleInputChange()
  //     .then(price => {
  //       this.handlePriceChange();
  //     })
  // }



  // handleBooksChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleFormSubmit(event) {
  //   event.preventDefault();
  //   let pages = this.state.pages;
  //   let books = this.state.books;
  //   let rate = this.state.rate;

  //   if (pages > 249) {
  //     this.setState({ rate: 0.06 });
  //   } else if (pages > 100 && pages < 250) {
  //     this.setState({ rate: 0.08 });
  //   } else if (pages < 101) {
  //     this.setState({ rate: 0.1 });
  //   } else {
  //     this.setState({ rate: 0.00 });
  //   }

  //   total = (pages * rate + 2.5) * books;

  // }

  render() {
    return (
      <div className="pricing">
        <div className="middle my-3 container">
          <h2>Pricing Calculator</h2>
          <form>
            <div>
              <label htmlFor="pages"># of pages</label>
              <Input
                type="text"
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
                type="text"
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
            {/* <div>
              <label htmlFor="total">Estimate: $</label>
              <Input type="text" className="form-control d-inline-block" name="total" id="total" value={total} />
            </div>
            <div>
              <Input
                type="submit"
                className="btn btn-primary"
                value="Estimate Price" />
            </div> */}
          </form>
        </div>
      </div>
    )
  }
}
