import { useEffect, useState } from 'react'
import './Skill.css'

const Skill = (props) => {
    // window.addEventListener('load', () => {
    //     let skillsSection = document.querySelector(".skills");
    //     let spans = document.querySelectorAll(".progress span");

    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY >= skillsSection.offsetTop - 100) {
    //             spans.forEach((span) => {
    //                 span.style.width = span.dataset.width;
    //             });
    //         };
    //     })
    // })
    const [width, setWidth] = useState(0);
    const [goal, setGoal] = useState(0)
    // useEffect(()=>{
    //     if(props.active){
    //         setWidth(props.progress);
    //     }
    // },[props.active])
    useEffect(()=>{
        if(props.active){
            let w = width;
            let count = setInterval(() => {
                setWidth((width)=> width+1)
                w++
                if(w>=props.progress){
                    clearInterval(count)
                }
            }, (1000/props.progress))
        }
    },[props.active])
    return (
        <div className="skill">
            <h3>{props.skill_name} <span>{width}%</span></h3>
            <div className="progress">
                {/* <span style={{ width: `0%`}} data-width={`${props.progress}%`}></span> */}
                <span style={{ width: `${width}%`}}></span>
            </div>
        </div>
    )
}

export default Skill