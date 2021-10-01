import React from 'react';
import {
  
  ApolloProvider

  
} from "@apollo/client";
import ReactDOM from 'react-dom';
import client from './Config'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
