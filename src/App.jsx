import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './component/login'
import Register from './component/register'
import { AuthProvider } from './context/authContext'
import DashBoard from './component/DashBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthProvider>
          <Routes>
      <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Register/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
      {/* <login/> */}
    {/* <Register/> */}
  
     </AuthProvider>
    </>
  )
}

export default App
