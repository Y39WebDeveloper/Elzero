import "./ServicesBox.css"

const ServicesBox = (props) => {
  return (
      <div className="services-box">
          {props.icon}
          <h3>{props.title}</h3>
          <div className="info">
              <a href="#">Details</a>
          </div>
      </div>
  )
}

export default ServicesBox