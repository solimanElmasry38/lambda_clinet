import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";
import "./assets/libs/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CartProvider } from "./context/cartCtx.tsx";
import { SearchProvider } from "./context/searchCtx.tsx";
const client = new ApolloClient({
  uri: "http://localhost:8888/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CartProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </ApolloProvider>
  </BrowserRouter>
);
