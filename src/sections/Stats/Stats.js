import { useEffect, useState } from 'react';
import { FaCode, FaGlobeAfrica, FaMoneyBill, FaUser } from 'react-icons/fa'
import { StatsBox } from '../../components'
import './Stats.css'

const StatsData = [
    { id: 0, icon: <FaUser/>, goal: 300, title: 'Clients' },
    { id: 1, icon: <FaCode/>, goal: 400, title: 'Projects' },
    { id: 2, icon: <FaGlobeAfrica/>, goal: 12, title: 'Coutries' },
    { id: 3, icon: <FaMoneyBill/>, goal: 500, title: 'Money' },
];

const Stats = () => {
    const [active, setActive] = useState(false);
    const [y, setY] = useState(0)
    const changeY = () => {
        setY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeY)
        let hei = document.getElementById('stats').offsetTop;
        if(y>=(hei-300)){
            setActive(true);
        }
        return () => window.removeEventListener('scroll', changeY)
    },[y])

    const stats = StatsData.map(stat => <StatsBox key={stat.id} icon={stat.icon} goal={stat.goal} title={stat.title} active={active} />)
  return (
      <section className="stats" id="stats">
          <h2>Our Awsome Stats</h2>
          <div className="container">
              {stats}
          </div>
      </section>
  )
}

export default Stats