import { Container, FooterBox1, FooterBox2, FooterBox3, FooterBox4 } from '../../components'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <FooterBox1/>
            <FooterBox2/>
            <FooterBox3/>
            <FooterBox4/>
        </Container>
        <p className="copyright">Made By Y39 &copy;</p>
    </footer>
  )
}

export default Footer