import { FaCheck } from 'react-icons/fa'
import './Plan.css'

const Plan = (props) => {
  return (
      <div className="pricing-box">
          <div className="title">{props.type}</div>
          <img src={props.img} alt=""/>
              <div className="price">
                  <span className="amount">{props.price}$</span>
                  <span className="time">Per Month</span>
              </div>
              <ul>
                  <li><FaCheck/>{props.space}GB HDD Space</li>
                  <li><FaCheck/>{props.email} Email Addresses</li>
                  <li><FaCheck/>{props.subdomain} Subdomains</li>
                  <li><FaCheck/>{props.database} Databases</li>
                  <li><FaCheck/>{props.support} Support</li>
              </ul>
              <a href="#">Choose Plan</a>
      </div>
  )
}
const PlanPopular = (props) => {
  return (
      <div className="pricing-box popular">
          <div className="label">Most Popular</div>
          <div className="title">{props.type}</div>
          <img src={props.img} alt=""/>
              <div className="price">
                  <span className="amount">{props.price}$</span>
                  <span className="time">Per Month</span>
              </div>
              <ul>
                  <li><FaCheck/>{props.space}GB HDD Space</li>
                  <li><FaCheck/>{props.email} Email Addresses</li>
                  <li><FaCheck/>{props.subdomain} Subdomains</li>
                  <li><FaCheck/>{props.database} Databases</li>
                  <li><FaCheck/>{props.support} Support</li>
              </ul>
              <a href="#">Choose Plan</a>
      </div>
  )
}

export default Plan
export {PlanPopular}