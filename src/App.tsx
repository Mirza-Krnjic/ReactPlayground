import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import Level4 from './components/Level4'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
        <Route path="/Level3" element={<Level3 />} />
        <Route path="/Level4" element={<Level4 />} />
      </Routes>
    </Router>
  )
}

export default App
