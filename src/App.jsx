import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Marketplace from './pages/Marketplace'
import FarmerDashboard from './pages/FarmerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import AddCrop from './services/AddCrop'
import Aiinfo from './pages/Aiinfo'
import EditCrop from './services/EditCrop'
import BuyCrop from './services/BuyCrop'
import Aiupload from './services/Aiupload'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/marketplace" element={<Marketplace/>}/>
    <Route path="/farmer-dashboard" element={<FarmerDashboard/>}/>
    <Route path="/buyer-dashboard" element={<BuyerDashboard/>}/>
    <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
    <Route path="/add-crop" element={<AddCrop/>}/>
    <Route path="/detect-disease" element={<Aiinfo/>}/>
    <Route path="/edit-crop/:cropId" element={<EditCrop/>}/>
    <Route path="/buy-crop/:cropId" element={<BuyCrop />} />
    <Route path="/Aiupload" element = {<Aiupload/>}/>
    </Routes>
    </>



  )
}

export default App
