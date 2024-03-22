import { FaClock, FaMapMarkedAlt, FaPhoneVolume } from 'react-icons/fa'
import './FooterBox3.css'

const FooterBox3 = () => {
  return (
    <div className="box3">
      <div className="line">
        <FaMapMarkedAlt/>
        <div className="info">Italia, Milan, San Siro</div>
      </div>
      <div className="line">
        <FaClock/>
        <div className="info">Business Hours: From 10:00 To 18:00</div>
      </div>
      <div className="line">
        <FaPhoneVolume/>
        <div className="info">
          <span>+20123456789</span>
          <span>+20198765432</span>
        </div>
      </div>
    </div>
  )
}

export default FooterBox3