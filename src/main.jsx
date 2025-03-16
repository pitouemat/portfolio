import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main />
  </StrictMode>,
)
