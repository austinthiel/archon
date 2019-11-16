import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from '../reducers';

import Home from '../components/home/Home';
import ModalRoot from '../components/modal/ModalRoot';

const App = () => {
  const store = createStore(rootReducer);

  return (
    <Router>
      <Provider store={store}>
        <Route path='/' component={Home} />
        <ModalRoot />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default hot(App);
