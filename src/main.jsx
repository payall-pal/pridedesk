
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Loader>
        <App />
    </Loader>
</BrowserRouter>
)
