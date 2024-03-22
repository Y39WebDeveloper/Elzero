import './Header.css'
import { FaAngleDoubleDown } from 'react-icons/fa'
import LandingImg from '../../imgs/landing-image.png'
import { Container } from '../../components'

const Header = () => {
  return (
    <header className='header'>
        <Container>
            <div className="text">
                <h1>Welcom, To Elzero World</h1>
                <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
            </div>
            <div className="img">
                <img src={LandingImg} alt=""/>
            </div>
        </Container>
        <a href="#articles" className="go-down"><FaAngleDoubleDown/></a>
    </header>
  )
}

export default Header