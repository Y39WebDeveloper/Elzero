import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import './TeamBox.css'
const TeamBox = (props) => {
    return (
        <div className="team-box">
            <div className="data">
                <img src={props.img} alt="" />
                <div className="social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default TeamBox