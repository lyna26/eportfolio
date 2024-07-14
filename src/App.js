
import './Styles/App.css';

import Hobbies from './pages/Hobbies'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Navbar from './Navbar'
import Home from './pages/Home'

import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
