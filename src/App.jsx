import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './dashboard/components/Layout'
import DashHome from './dashboard/components/DashHome'
import Payment from './dashboard/components/Payment'
import Setting from './dashboard/components/Setting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashHome />} />
          <Route path="home" element={<Payment />} />
          <Route path="settings" element={<Setting/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
