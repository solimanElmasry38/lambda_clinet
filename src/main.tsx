import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql
} from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:8888/graphql",
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById("root")!).render(

    <BrowserRouter>
      <React.StrictMode>
      <ApolloProvider client = {client}>
        <App />
        </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>

);
