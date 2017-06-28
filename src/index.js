import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

import App from './App'
import css from './coinhover.scss'
import { addCoin } from './reducer/portfolio/actions'

const element = document.getElementById('coinhover');

const store = createStore(reducer, compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.dispatch(addCoin('bitcoin'));

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, element);