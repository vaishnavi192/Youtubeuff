import './Sidebar.css'
import home from '../../assests/home.png'
import game_icon from '../../assests/game_icon.png'
import automobiles from '../../assests/automobiles.png'
import sports from '../../assests/sports.png'
import entertainment from '../../assests/entertainment.png'
import tech from '../../assests/tech.png'
import music from '../../assests/music.png'
import blogs from '../../assests/blogs.png'
import news from '../../assests/news.png'
import jack from '../../assests/jack.png'
import simon from '../../assests/simon.png'
import megan from '../../assests/megan.png'
import cameron from '../../assests/cameron.png'
import vaishu from '../../assests/vaishu_uff.jpg'


const Sidebar = ({sidebar, category, setCategory}) => { 
  return (
      <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>  
      {/* means if sidebar is true then sidebar class will be applied otherwise small-sidebar */}
      {/* //pehle 'sidebar' likha tha ab props pass krne ke baad
    // aisa kiya ofc, active is new classname will define css for it*/}
        <div className='shortcut-links'>
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
            <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
            <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
            <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
            <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
            <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
            <img src={blogs} alt="" /><p>blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
            <img src={news} alt="" /><p>News</p>
            </div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
            <img src={vaishu} alt="" /> <p>Vaishu_uff</p>
            </div>
            <div className="side-link">
            <img src={jack} alt="" /> <p>PewDiePie</p>
            </div>
            <div className="side-link">
            <img src={simon} alt="" /> <p>MrBeast</p>
            </div>
            <div className="side-link">
            <img src={megan} alt="" /> <p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
            <img src={cameron} alt="" /> <p>Nas Daily</p>
            </div>
        </div>
        </div> 
  );
};

export default Sidebar
