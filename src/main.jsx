import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MovieRouterApp from './MovieRouterApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieRouterApp />
  </BrowserRouter>,
)
