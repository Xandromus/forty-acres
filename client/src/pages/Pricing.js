import React, { Component } from 'react';
import { Input } from 'reactstrap';
import "../styles/Pricing.css";

export default class Pricing extends Component {

  state = {
    pages: ""
  }

  render() {
    return (
      <div className="pricing">
        <div className="middle my-3 container">
          <h2>Pricing Calculator</h2>
          <form>
            <div>
              <label htmlFor="pages"># of pages</label>
              <Input type="text" className="form-control d-inline-block" name="pages" id="pages" />
            </div>
            <div>
              <label htmlFor="pages"># of books</label>
              <Input type="text" className="form-control d-inline-block" name="copies" id="copies" />
            </div>
          </form>
          <p>Estimate: $</p>
        </div>
      </div>
    )
  }
}
