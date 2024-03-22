import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import './FooterBox1.css'

const FooterBox1 = () => {
  return (
    <div className="box1">
      <h3>Elzero</h3>
      <ul className="social">
        <li>
          <a href="#" className="facebook"><FaFacebook/></a>
        </li>
        <li>
          <a href="#" className="twitter"><FaTwitter/></a>
        </li>
        <li>
          <a href="#" className="youtube"><FaYoutube/></a>
        </li>
      </ul>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam, omnis ut magni quisquam vero reiciendis quod quos! Consequatur, omnis.</p>
    </div>
  )
}

export default FooterBox1