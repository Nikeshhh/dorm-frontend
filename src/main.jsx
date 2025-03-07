import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './Theme.jsx'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
