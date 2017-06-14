import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from "react-redux"
// import { createCommonStore } from "./store";
import App from './App'
import css from './coinhover.scss'

// const store = createCommonStore();
const element = document.getElementById('coinhover');
console.log('element', element);

ReactDOM.render(<App />, element);