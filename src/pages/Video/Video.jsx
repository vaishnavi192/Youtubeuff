import './Video.css'
import PlayVideo from '../../assets/playVideo.png'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const[videoId, categoryId] = useParams();
  return (
    <div className= 'play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId ={categoryId}/>
      
    </div>
  )
}

export default Video 
