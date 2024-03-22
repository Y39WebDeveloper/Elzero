import { FaRegComments, FaRegCalendar, FaRegUser, FaRegBuilding, FaRegCheckCircle, FaRegClipboard, FaServer, FaRegPlayCircle, FaRegChartBar, FaPercent } from "react-icons/fa"
import MegaMenuImg from "../../imgs/megamenu.png"
import MegaMenuItem from '../MegaMenuItem/MegaMenuItem'
import './MegaMenu.css'

const MegaMenu = () => {
  return (
      <div className="mega-menu">
          <div className="img">
              <img src={MegaMenuImg} alt=""/>
          </div>
          <ul className="links">
              <MegaMenuItem targ="testimonials" link="Testimonial" icon={<FaRegComments/>}/>
              <MegaMenuItem targ="team" link="Team Member" icon={<FaRegUser />}/>
              <MegaMenuItem targ="services" link="Services" icon={<FaRegBuilding />}/>
              <MegaMenuItem targ="skills" link="Skills" icon={<FaRegCheckCircle />}/>
              <MegaMenuItem targ="work-steps" link="Work steps" icon={<FaRegClipboard/>}/>
          </ul>
          <ul className="links">
              <MegaMenuItem targ="events" link="Events" icon={<FaRegCalendar />}/>
              <MegaMenuItem targ="pricing" link="Pricing" icon={<FaServer />}/>
              <MegaMenuItem targ="videos" link="Videos" icon={<FaRegPlayCircle />}/>
              <MegaMenuItem targ="stats" link="Stats" icon={<FaRegChartBar />}/>
              <MegaMenuItem targ="discount" link="Discount" icon={<FaPercent />}/>
          </ul>
      </div>
  )
}

export default MegaMenu