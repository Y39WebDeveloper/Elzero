import { Section, TeamBox } from '../../components'
import './Team.css'
import TeamData from './TeamData'

const Team = () => {
    const members = TeamData.map(member => <TeamBox key={member.id} img={member.img} name={member.name} description={member.description} />)
    return (
        <Section name="team" title="Team Member">
            {members}
        </Section>
    )
}

export default Team