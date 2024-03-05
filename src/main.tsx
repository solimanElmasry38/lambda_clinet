import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import './assets/libs/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SearchProvider } from './context/searchCtx.tsx';
import { LoadingProvider } from './context/loadingCtx.tsx';
import { ToastProvider } from 'react-toast-notifications';
const client = new ApolloClient({
  uri: 'http://192.168.1.11:8888/graphql',
  connectToDevTools: true,
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <LoadingProvider>
        <SearchProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </SearchProvider>
      </LoadingProvider>
    </ApolloProvider>
  </BrowserRouter>
);
