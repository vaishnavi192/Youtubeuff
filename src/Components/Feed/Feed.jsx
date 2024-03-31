import './Feed.css'
import thumbnail1 from '../..assests/thumbnail1.png'
import thumbnail2 from '../..assests/thumbnail2.png'
import thumbnail3 from '../..assests/thumbnail3.png'
import thumbnail4 from '../..assests/thumbnail4.png'
import thumbnail5 from '../..assests/thumbnail5.png'
import thumbnail6 from '../..assests/thumbnail6.png'
import thumbnail7 from '../..assests/thumbnail7.png'
import thumbnail8 from '../..assests/thumbnail8.png'
import { API_KEY } from '../../data'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Feed = ({category}) => {
  const[data, setData] = useState([]);
  const fetchData = async () =>{
      const videoList_url = `AIzaSyC67Ba9M7d-tu7kejv3YOxsRZ1Efprnkqohttps://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items)) 
     //example of chain promises coz we used 2 then. also, we will store yt api videos json response in setData state 
  }
  useEffect(()=>{
      fetchData();
  },[category])

  return (
    <div className= 'Feed'> 
    {data.map((item,index)=>{
      return(
    <Link to={`video/${item.snippet.categoryID}/${item.id}`} className='card'>
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.channelID}</h3>
      <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAT).fromNow()}</p>
      {/* //moment is a package in package.json to tell about time like 2 days ago */}
      </Link>
      

      )
    })}
    {/*Feed class ke andar saare class dalenge jisse ki css sath mein badal le sbka*/}
    
      </div>
    </div>
  )
}

export default Feed

{/* Now we are using useEffect and state we don't need multiple cards
      <div className='card'>
      <img src={thumbnail2} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail3} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail4} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail5} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail6} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail7} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div>
      <div className='card'>
      <img src={thumbnail8} alt="" />
      <h2>My first yt video</h2>
      <h3>Vaishu_uff</h3>
      <p>100k views &bull; 69 hours ago</p>
      </div> */}