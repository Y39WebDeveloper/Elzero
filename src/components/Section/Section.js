import './Section.css'
import { MainTitle, Container } from '..'

const Section = (props) => {
  return (
      <section className={`section ${props.name}`} id={props.name} style={{ backgroundColor: props.grey ? '#ececec' : ''}}>
        <MainTitle>{props.title}</MainTitle>
        <Container>
            {props.children}
        </Container>
      </section>
  )
}

export default Section