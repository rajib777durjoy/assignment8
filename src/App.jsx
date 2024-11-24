
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

function App() {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div>
        <Footer></Footer>
        </div>
    </div>
    </>
  )
}

export default App
