import { Section, WorkBox } from '../../components'
import WorkBanner from '../../imgs/work-steps.png'
import './HowItWork.css'
import WorkData from './WorkData'

const HowItWork = () => {
    const workBoxes = WorkData.map(work => <WorkBox key={work.id} img={work.img} title={work.title} content={work.content} />);
  return (
    <Section name="work-steps" title="How It Work ?" grey={true}>
        <img src={WorkBanner} alt="" className="image"/>
        <div className='info'>
            {workBoxes}
        </div>
    </Section>
  )
}

export default HowItWork