import './playVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import share from '../../assets/share.png'
import user_profile from '../../assets/user_profile.png'
import jack from '../../assets/jack.png'
import { useEffect } from 'react'

const playVideo = ({videoId}) => {
    const[apiData,setApiData] = useState(null);

const fetchVideoData = async () => {
    //fetching video details
    const videoDetails_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&id=&{videoId}&key=&{API_KEY}`;
    await fetch(videoDetails_url)
// [] if we leave it empty it will run only once when the component is mounted while 
// using useEffect

}
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>My First 2 years experience in NITT</h3>
        <div className="play-video-info">
        <p>100k views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />5</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
        </div>
    </div>
    <hr />
    <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>Vaishu_uff</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className = "video-description">
        <p>Creating your own youtube channel with code is very fun!!</p>
        <p>Subscribe to watch more such fun videos</p>
        <hr />
        <h4>130 comments</h4>
        <div className= "comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Jack Nikolson <span>1 day ago</span></h3>
                <p>Posts good videos but not better than Vaishu_uff</p>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>4</span>
                </div>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>4</span>
                </div>
                <div className='comment-action'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>4</span>
                </div>
                <div className='comment-section'>
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                    <span>4</span>
                </div>
            </div>


        </div>
    </div>
    </div>
  )
}

export default playVideo
