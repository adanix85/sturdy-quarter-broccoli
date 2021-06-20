import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const element = <h1>Hello world</h1>
console.log(element);

ReactDom.render(<App />, document.getElementById('root'));