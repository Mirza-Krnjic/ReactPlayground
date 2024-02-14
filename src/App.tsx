import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Counter from './components/Counter'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
