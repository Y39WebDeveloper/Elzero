import './WorkBox.css'

const WorkBox = (props) => {
  return (
      <div className="work-box">
          <img src={props.img} alt=""/>
              <div className="text">
                  <h3>{props.title}</h3>
                  <p>{props.content}</p>
              </div>
      </div>
  )
}

export default WorkBox