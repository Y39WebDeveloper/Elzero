import { CountDown, Section } from '../../components'
import EventImg from '../../imgs/events.png'
import './Events.css'

const Events = () => {
    return (
        <Section name="events" title="Latest Events">
            <img src={EventImg} alt="event" />
            <div className='info'>
                <CountDown year={2024} month="June" day={1} hours={9} min={0} sec={0} />
                <h2 className="title">UEFA Champions League Final</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe laborum architecto atque incidunt. Rerum cumque maxime dicta quisquam sunt.
                </p>
            </div>
            <div className="subscribe">
                <form action="">
                    <input type="email" placeholder="Enter Your Email"/>
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
        </Section>
    )
}

export default Events