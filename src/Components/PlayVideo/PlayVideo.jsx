import './playVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import share from '../../assets/share.png'
import { useEffect, useState, useParams} from 'react'
import moment from 'moment'
import { API_KEY, value_converter } from './data';


// const PlayVideo = ({videoId}) => { will remove videoId props from here and use useParams instead to 
//get video with video data as well for each video and provide videoId in useEffect hook
    const PlayVideo = () => { 
    const {videoId} = useParams();
    const[apiData,setApiData] = useState(null);
    const[channelData, setChannelData] = useState(null);
    const[commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
    //fetching video details
    const videoDetails_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0])); //fetching video details
}
    const fetchOtherData = async () => {
        //fetching channel data 
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2C%20statistics%20&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0])); //fetching channel details
        //we want to fetch video data first so that we get the channel id and then fetch other data 

        //fetching comment data 
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }
    useEffect(() => {
        fetchVideoData();
    },[videoId]) //yahan videoId pass karenge so that whenever videoId is updated this function will again be executed
    // and when this function be executed it will update the apiData and that will call the fetchOtherData function to update
    useEffect(() => {
        fetchOtherData();
    },[apiData] ) //if apiData changes then only this useEffect will run in this case 
    return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
        <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"10 hrs ago"}</p>
        <div>
            <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):150}</span>
             <span><img src={dislike} alt="" /></span> {/*no dislike data from api so removing it  */}
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
        </div>
    </div>
    <hr />
    <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className = "video-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"description here"}</p> 
        {/* to make description small and limited we used slice method  */}
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102}</h4>
        {commentData.map((item,index)=>{
        return(
            <div key={index} className = "comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                </div>

        </div>
    </div>
        )
  })}
</div>
</div>
    )
}
export default PlayVideo;
