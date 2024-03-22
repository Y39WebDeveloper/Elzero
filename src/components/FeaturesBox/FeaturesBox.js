import './FeaturesBox.css'

const FeaturesBox = (props) => {
  return (
      <div className="features-box">
          <div className="img-holder">
            <div className='before-1' style={{backgroundColor: `#${props.color}99`}}></div>
            <img src={props.img} alt="feature" />
          </div>
          <h2>{props.title} <div className='after-1' style={{ backgroundColor: `#${props.color}` }}></div></h2>
          <p>{props.content}</p>
          <a href="/" style={{ borderColor: `#${props.color}`, color: `#${props.color}`, backgroundImage: `linear-gradient(to right, #${props.color} 50%, #fff 50%)` }}>More</a>
      </div>
  )
}

export default FeaturesBox