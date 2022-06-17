
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home"
import {Routes,Route } from "react-router-dom"
import LiveScore from './components/Live/LiveScore'
import SeriesHome from './Routes/SeriesHome/SeriesHome'
import Video from './Routes/Video/Video'
function App() {
  

  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<LiveScore/>}></Route>
        <Route path='/series' element={<SeriesHome/>}></Route>
        {/* <Route path='/teams' element={<Teams/>}></Route> */}
        {/* <Route path='/news' element={<News/>}></Route> */}
        {/* <Route path='/features' element={<Features/>}></Route> */}
        <Route path='/videos' element={<Video/>}></Route>


      </Routes>
     
    </div>
  )
}

export default App
