import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import './assets/libs/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CartProvider } from './context/cartCtx.tsx';
import { SearchProvider } from './context/searchCtx.tsx';
import { LoadingProvider } from './context/loadingCtx.tsx';
const client = new ApolloClient({
  uri: 'http://192.168.1.11:8888/graphql',
  connectToDevTools: true,
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CartProvider>
        <LoadingProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </LoadingProvider>
      </CartProvider>
    </ApolloProvider>
  </BrowserRouter>
);
