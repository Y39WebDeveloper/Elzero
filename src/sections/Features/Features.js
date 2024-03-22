import { FeaturesBox, Section } from '../../components'
import './Features.css'
import FeaturesData from './FeaturesData'

const Features = () => {
    const features = FeaturesData.map(feature => <FeaturesBox key={feature.id} img={feature.img} title={feature.title} color={feature.color} content={feature.content} />)
  return (
    <Section name="features" title="Features">
        {features}
    </Section>
  )
}

export default Features