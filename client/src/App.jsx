import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Message from './pages/Message.jsx'
import Universities from './pages/Universities.jsx'
import User from './pages/User.jsx'

function App() {
  return <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/universities" element={<Universities/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
}

export default App
