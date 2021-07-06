import './App.css';
import React from 'react';
import store from './store';
import Questions from './components/questions';
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Questions />
      </Provider>
    </div>
  );
}

export default App;
