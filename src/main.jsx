import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider} from './components/themeContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
    <App />
  </ThemeProvider>
  </React.StrictMode>,
)





