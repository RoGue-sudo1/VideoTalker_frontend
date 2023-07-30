
import { useEffect } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import LoginPage from './LoginPage/LoginPage'
import { connectWithWebSocket } from './utils/wssConnection/wssConnection'



function App() {

  useEffect(()=>{
    connectWithWebSocket()
        
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
