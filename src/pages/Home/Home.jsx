import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import {useState} from 'react'


const Home = (sidebar) => {
  const [category, setCategory] = useState(0)
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${Sidebar?"":'large-container'}`}>
      {/* we have classname container and if that is false then it will be large-container, 
      large container happens for small-sidebar*/}
      <Feed category={category} />
      </div>
    </>
  )
}

export default Home