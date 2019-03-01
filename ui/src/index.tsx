import 'semantic-ui-css/semantic.min.css'
import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './_helpers'

ReactDOM.render(
	<Provider store={store}>
    <App/>
  </Provider>,
	document.getElementById('root')
)
