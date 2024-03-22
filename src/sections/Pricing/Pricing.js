import { Plan, PlanPopular, Section } from '../../components'
import HostingImg_1 from '../../imgs/hosting-basic.png'
import HostingImg_2 from '../../imgs/hosting-advanced.png'
import HostingImg_3 from '../../imgs/hosting-professional.png'
import './Pricing.css'

const Pricing = () => {
  return (
    <Section name="pricing" title="Pricing Plans" grey={true}>
          <Plan type="Basic" price={15} img={HostingImg_1} space={10} email={5} subdomain={4} database={4} support="Basic" />
          <PlanPopular type="Advenced" price={25} img={HostingImg_2} space={20} email={10} subdomain={10} database={8} support="Advenced" />
          <Plan type="Professional" price={45} img={HostingImg_3} space={50} email={20} subdomain={5} database={20} support="Professional" />
    </Section>
  )
}

export default Pricing