import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';

const isProd = process.env.NODE_ENV === 'production';
ReactGA.initialize('UA-130212787-1', {
  debug: !isProd,
});

ReactDOM.render(<App />, document.getElementById('index'));
