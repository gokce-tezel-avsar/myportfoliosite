import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from "./App"
import { AppProvider } from './context/AppContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <AppProvider>
   
    <App />
  </  AppProvider>
  <ToastContainer />
  </BrowserRouter>
)
