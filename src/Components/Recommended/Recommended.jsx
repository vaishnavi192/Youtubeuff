import './Recommended.css'
import {useEffect, useState   } from 'react'
import { value_converter } from '../../data'
import { API_KEY } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async()=> {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className='recommended'>
      {apiData.map((item, index)=>{
        return(
        // <div key = {index} className="side-video-list"> we will convert this div tag to link tag jisse ki recommended 
        // video pe click kare to vo chalne lage we will link it to urls of video by providing categoryId/videoId for 
        // each video 
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}key = {index} className="side-video-list"> 
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
          <p>{value_converter(item.statistics.viewCount)}</p>
      </div>
      </Link>

        )
      })}
      
    </div>
  )
}

export default Recommended;

// with this code, we can play the recommended video after clicking it but uss video se related data display nhi hoga so 
// uske liye hame PlayVideo.jsx mein videoId props ko hatake useParams use krna hoga 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        //    <div className="recommended'>
    //         </div>
       
       
       
       
    //    <div className="side-video-list">
//             <img src={thumbnail1} alt="" />
//             <div className="vid-info">
//                 <h4>Best channel that help you to be a web developer</h4>
//                 <p>GreatStack</p>
//         <p></p>
// </div>
// </div>
// }