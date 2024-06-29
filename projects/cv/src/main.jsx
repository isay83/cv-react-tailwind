import React from 'react'
import ReactDOM from 'react-dom/client'
// COMPONENTS
import Header from './components/Header.jsx'
import NavbarSimple from './components/Navbar.jsx'
// INDEX CSS
import './index.css'

ReactDOM.createRoot(document.getElementsByTagName('body')).render(
  <React.StrictMode>
    <NavbarSimple />
    <Header />
  </React.StrictMode>
)
