import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Background from './assets/Background.png'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-cyan-100 to-blue-900'>
      <App />
    </div>
  </React.StrictMode>,
)