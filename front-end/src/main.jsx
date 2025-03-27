import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//I've removed the strict mode as this is a very simple project
createRoot(document.getElementById('root')).render(
    <App />
)
