import {useState} from 'react'
import Navbar from 'Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from 'Components/Home/Home'
import Video from 'Components/Video/Video'
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
         <Route Path = '/' element = {<Home sidebar={sidebar} />} /> {/*we have to send sidebar in home isliye */}
        {/* Home ke sath mein sidebar props use karenge */}
        <Route Path = '/video/:categoryID/videoID' element = {<Video/>} />
      </Routes>
    </div>
  )
}

export default App

