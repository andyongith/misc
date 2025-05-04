import {HashRouter as Router, Routes, Route} from "react-router-dom"

import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Message from './pages/Messages.jsx'
import Universities from './pages/Universities.jsx'
import User from './pages/User.jsx'
import Mentors from "./pages/Mentors.jsx"
import Bookmarks from "./pages/Bookmarks.jsx"

function App() {
  return <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/messages" element={<Message/>} />
        <Route path="/university_insights" element={<Universities/>} />
        <Route path="/profile" element={<User/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
      </Routes>
    </Router>
}

export default App
