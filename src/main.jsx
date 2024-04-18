import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Theme from './Theme.jsx'
import { ThemeProvider } from '@emotion/react'




ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>,
)
