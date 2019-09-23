import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Articles from './components/articles'
import './index.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>    
      <Articles/>
  </Provider>
);

export default App;
