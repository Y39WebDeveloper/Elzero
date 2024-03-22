import { useEffect, useState } from 'react'
import { Section, Skill } from '../../components'
import SkillData from '../../components/Skill/SkillData'
import SkillsImg from '../../imgs/skills.png'
import './Skills.css'

const Skills = () => {
    
    const [active, setActive] = useState(false);
    const [y, setY] = useState(0)
    const changeY = () => {
        setY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeY)
        let hei = document.getElementById('skills').offsetTop;
        if(y>=(hei-100)){
            setActive(true);
        }
        return () => window.removeEventListener('scroll', changeY)
    },[y])
    const skills = SkillData.map(skill => <Skill key={skill.id} skill_name={skill.name} progress={skill.progress} active={active} />);
    return (
        <Section name="skills" title="Our Skills">
            <img src={SkillsImg} alt="" />
            <div className='skills'>
               {skills}
            </div>
        </Section>
    )
}

export default Skills