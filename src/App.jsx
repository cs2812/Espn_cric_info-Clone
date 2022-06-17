import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from "./pages/Home"
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark-mode" : "light-mode"}>


      <div>
        <div className="container">
          
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
          
        </div>
      </div>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
