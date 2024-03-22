import './TestimonialBox.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const TestimonialBox = (props) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        const rate = props.rate;
        if (rate > i) {
            if (i - rate > -1 && i - rate < 0) {
                arr.push(<FaStarHalfAlt />)
            } else {
                arr.push(<FaStar />)
            }
        } else {
            arr.push(<FaRegStar />)
        }
    }
    const stars = arr.map((star, index) => {return <span key={index}>{star}</span>});
    return (
        <div className="testimonials-box">
            <img src={props.img} alt="" />
            <h3>{props.full_name}</h3>
            <span className="title">{props.title}</span>
            <div className="rate">
                {stars}
            </div>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default TestimonialBox