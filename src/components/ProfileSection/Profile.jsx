import Pic from "../../assets/profile__img.png"
import ShareIcon from "../../assets/shareM.png"
import ShareIcon2 from "../../assets/Icon2.png"
import "./profile.css"

function Profile({slackName}) {

  return (
    <div className="profile">
      <a href="#" id="share"><img src={ShareIcon} alt="share"/></a>
      <a href="#" id="share2"><img src={ShareIcon2} alt="share"/></a>
      <div className="profile_img_section">
        <img id="profile__img" src={Pic} alt="profile_img" />
      </div>
      <h1 id="twitter">Ibukunoluwa Oyeniyi</h1>
      <h1 id="slack">{`${slackName}`}</h1>
    </div>
  )
}

export default Profile
