import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Templates/App'
import { GlobalStyles } from './Styles/global-styles'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Home />
    <GlobalStyles/>
  </React.StrictMode>
)
