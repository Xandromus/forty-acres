import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/contact" component={Contact} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
          </Wrapper>
        </Router>
      </div>
    );
  }
}

export default App;
