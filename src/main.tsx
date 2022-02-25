import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RelayEnvironmentProvider } from 'react-relay'
import environment from './relay/environment'

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
