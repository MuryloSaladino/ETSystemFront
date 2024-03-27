import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ColorsProvider } from './context/ColorsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorsProvider>
          <App/>
      </ColorsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
