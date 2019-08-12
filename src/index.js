import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import Routes from './routes'

const app = document.getElementById('root')

const store = createStore(
	reducers, //all reducers	
    {}, //initial state
    applyMiddleware(reduxThunk)
);

render(
    <Provider store= {store}>
       <Routes /> 
    </Provider>
, app);

