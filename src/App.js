import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default App;
