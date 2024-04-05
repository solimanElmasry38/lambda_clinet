import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import './assets/libs/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SearchProvider } from './context/searchCtx.tsx';
// import { LoadingProvider } from './context/loadingCtx.tsx';

// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';
// import { split, HttpLink } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';
import { CartQuantityProvider } from './context/cartQuantity.tsx';

// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://192.168.1.11:8888/graphql',
// }));
// const httpLink = new HttpLink({
  // uri: 'https://lambdaserver-production.up.railway.app/'
//   uri: 'http://localhost:8888/graphql'

// });
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   // wsLink,
//   httpLink,
// );
// const client = new ApolloClient({
//   link: splitLink,
//   connectToDevTools: true,
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({
  uri: 'https://lambdaserver-production.up.railway.app/',

//  uri:'http://192.168.1.11:8888/graphql',
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CartQuantityProvider>
        <SearchProvider>
         
            <App />
       
        </SearchProvider>
      </CartQuantityProvider>
    </ApolloProvider>
  </BrowserRouter>
);
