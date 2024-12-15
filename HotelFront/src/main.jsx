import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// src/main.jsx o src/App.jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// src/index.css
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
