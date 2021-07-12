import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';

import App from './app/App';
import reportWebVitals from './reportWebVitals';
import reducer  from "./store/reducer";
import { DispatchType, MessageAction, MessageState } from './models/messages';

const store: Store<MessageState, MessageAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
