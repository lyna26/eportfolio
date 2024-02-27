
import './Styles/App.css';

import AboutMe from './pages/AboutMe'
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
          <Route path="/pricing" element={<AboutMe />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
