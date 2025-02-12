import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="logo-container">
      <Link to="/water">
        <i className="fas fa-water logo water" aria-label="Water"></i>
      </Link>
      <Link to="/fire">
        <i className="fas fa-fire logo fire" aria-label="Fire"></i>
      </Link>
      <Link to="/air">
        <i className="fas fa-cloud logo air" aria-label="Air"></i>
      </Link>
      <Link to="/earth">
        <i className="fas fa-tree logo earth" aria-label="Earth"></i>
      </Link>
    </div>
  )
}

function Water() {
  return (
    <div className="logo-container">
      <i className="fas fa-water logo water" aria-label="Water"></i>
    </div>
  )
}

function Fire() {
  return (
    <div className="logo-container">
      <i className="fas fa-fire logo fire" aria-label="Fire"></i>
    </div>
  )
}

function Air() {
  return (
    <div className="logo-container">
      <i className="fas fa-cloud logo air" aria-label="Air"></i>
    </div>
  )
}

function Earth() {
  return (
    <div className="logo-container">
      <i className="fas fa-tree logo earth" aria-label="Earth"></i>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water" element={<Water />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/air" element={<Air />} />
        <Route path="/earth" element={<Earth />} />
      </Routes>
    </Router>
  )
}

export default App