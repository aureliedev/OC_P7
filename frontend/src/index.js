/******************************* fichier SOURCE **********************************/
/*---------IMPORT----------*/
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* DEVTOOLS a retirer en mode production */
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

/*-------------------*/
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

/*-------------------*/
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
