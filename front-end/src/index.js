import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpClient,
  from
} from '@apollo/client'
import {
  onError,
} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError})=>{
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      console.log("message")
    })
  }
})

const link = from([
  errorLink,
  new HttpClient({url:"http://localhost:8000"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}><App /></ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
