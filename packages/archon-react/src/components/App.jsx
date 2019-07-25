import './App.scss';

import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';

import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Projects from './projects/Projects.jsx';
import Contact from './contact/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div styleName='container'>
          <Header />

          <div styleName='body'>
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
          </div>

          <div styleName='footer'>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default hot(App);
