import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Clients from './components/Clients'
import ClientDetails from './components/ClientDetails'
import ClientForm from './components/ClientForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="customers/" element={<Clients />}>
          
        </Route>
        <Route path="customers/:id" element={<ClientDetails />}/>
        <Route path="customers/create" element={<ClientForm />}/>
        <Route
            path="*"
            element={
              <main className='flex justify-center items-center h-screen'>
                <p>There's nothing here!</p>
              </main>
            }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);


