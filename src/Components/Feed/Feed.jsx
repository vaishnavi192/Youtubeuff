import './Feed.css'
import { API_KEY } from '../../data'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import moment from 'moment'


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
    <Link to={`video/${item.snippet.categoryID}/${item.id}`} key={index} className='card'>
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.channelID}</h3>
      <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAT).fromNow()}</p>
      </Link>
      

      )
    })}
    {/*Feed class ke andar saare class dalenge jisse ki css sath mein badal le sbka*/}
    
      </div>
  );
}

export default Feed;
