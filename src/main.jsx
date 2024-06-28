import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/SalenasBlog/">
    <Route path="/" element={<Home/>}></Route>
    <App />
  </BrowserRouter>,
)
