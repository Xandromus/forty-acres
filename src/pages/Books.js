import React, { Component } from 'react';

export default class Books extends Component {
  render() {
    return (
      <div className="books">
        { this.props.children }
      </div>
    )
  }
}