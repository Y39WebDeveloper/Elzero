import { Section, ServicesBox } from '../../components'
import './Services.css'
import ServicesData from './ServicesData';

const Services = () => {
    const services = ServicesData.map(service => <ServicesBox key={service.id} icon={service.icon} title={service.title} />);
  return (
    <Section name="services" title="Services" grey={true}>
        {services}
    </Section>
  )
}

export default Services