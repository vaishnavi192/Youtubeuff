import menu_icon from '../../assests/menu.png'
import logo from '../../assests/logo.png'
import search_icon from '../../assests/search.png'
import upload_icon from '../../assests/upload.png'
import more_icon from '../../assests/more.png'
import notification_icon from '../../assests/notification.png'
import profile_icon from '../../assests/profile.png'
import { Link } from 'react-router-dom'
const Navbar = (setSidebar) => {
  return (
    <nav className='flex-div'>
        <div className= 'nav-left flex-div'>
            <img className = 'menu_icon' onClick = {() => setSidebar(prev=>prev===false?true:false)} src ={menu_icon} alt ="" />
            {/* setbar ko open close krne ke liye onclick function and setSidebar passed as props */}
            <Link to='/'>< img className = 'logo' src ={logo} alt ="" /></Link>
        </div>
        <div className = "nav-middle flex-div">
            <div className = 'search-box flex-div'>
                <input type = 'text' placeholder = 'Search'/>
                <img src = {search_icon} alt ="" />
            </div>
        </div>
            <div className = 'nav-right flex-div'>
                <img src = {profile_icon} className = 'user-icon' alt ="" />
                <img src = {upload_icon} alt ="" />
                <img src = {more_icon} alt ="" />
                <img src = {notification_icon} alt ="" />
            </div>


    </nav>
  )
}

export default Navbar
