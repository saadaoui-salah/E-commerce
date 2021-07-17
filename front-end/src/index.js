import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { setContext } from "@apollo/client/link/context";
/* const errorLink = onError(({graphqlErrors, networkError})=>{
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      console.log("message")
    })
  }
})

const link = from([
  errorLink,
  new HttpClient({uri:"http://127.0.0.1:8000/graphql"}),
]) */

const httpLink = createUploadLink({ uri: "http://127.0.0.1:8000/graphql" })
const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
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
