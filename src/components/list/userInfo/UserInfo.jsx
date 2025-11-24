import './userInfo.css'
import { useUserStore } from '../../../lib/userStore';

const UserInfo = () => {
    const {currentUser} = useUserStore();
    return(
        <div className="userInfo">
            <div className='user'>
                <img src={currentUser.avatar || "./avatar.png"} alt=""></img>
                <h3>{currentUser.username}</h3>
            </div>
            <div className='icons'>
                <img src="./more.png" alt=""></img>
                <img src="./video.png" alt=""></img>
                <img src="./edit.png" alt=""></img>
            </div>
        </div>
    )
}

export default UserInfo;