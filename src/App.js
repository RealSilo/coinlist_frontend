import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import CoinContainer from './coin/CoinContainer';
import CoinListContainer from './coinList/CoinListContainer';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Coinlist</h1>
          </header>
          <p className="App-intro">
            <Router>
              <div>
                <Route exact path='/coins/:id' component={CoinContainer} />
                <Route exact path='/' component={CoinListContainer} />
              </div>
            </Router>
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
