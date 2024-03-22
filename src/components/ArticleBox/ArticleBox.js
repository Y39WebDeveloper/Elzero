import './ArticleBox.css'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Box = (props) => {
  return (
      <div className="articles-box">
          <img src={props.img} alt="article" />
          <div className="content">
              <h3>{props.title}</h3>
              <p>{props.content}</p>
          </div>
          <div className="info">
              <a href="/">Read More</a>
              <FaLongArrowAltRight/>
          </div>
      </div>
  )
}

export default Box