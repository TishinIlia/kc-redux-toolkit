import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import { initializeAPI } from './api'
import { store } from './store'
import App from './App'

initializeAPI()

const rootElement = document.getElementById('root')

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
)
