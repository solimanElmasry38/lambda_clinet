import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";
import "./Renders/main.ts";
import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(

    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

);
