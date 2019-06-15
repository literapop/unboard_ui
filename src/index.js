import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
// import {Query, ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
// import {resolvers, typeDefs} from './resolvers';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://www.unboard.today/api/graphiql',
  }),
  // resolvers,
  // typeDefs,
});


client
  .query({
    query: gql`
      {
        suggestion{ 
          suggestion
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
