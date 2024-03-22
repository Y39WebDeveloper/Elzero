import { useState,useEffect } from 'react'
import './StatsBox.css'

const StatsBox = (props) => {
    // window.addEventListener('load', () => {
    //     let nums = document.querySelectorAll(".stats span.number");
    //     let statsSection = document.getElementById("stats");
    //     let started = false;

    //     window.onscroll =  () => {
    //         if (window.scrollY >= statsSection.offsetTop - 1000) {
    //             if (!started) {
    //                 nums.forEach((number) => startCount(number));
    //             }
    //             started = true;
    //         }
    //     }
    // })
    // function startCount(el) {
    //     let goal = el.dataset.goal;
    //     let count = setInterval(() => {
    //         el.textContent++;
    //         if (el.textContent == goal) {
    //             clearInterval(count);
    //         }
    //     }, 2000 / goal);
    // };
    const [goal, setGoal] = useState(0)
    useEffect(()=>{
        if(props.active){
            let g = goal;
            let count = setInterval(() => {
                setGoal((goal)=> goal+1)
                g++
                if(g>=props.goal){
                    clearInterval(count)
                }
            }, (2000/props.goal))
        }
    },[props.active])
  return (
      <div className="stats-box">
          {props.icon}
          <span className="number">{goal}</span>
          <span className="text">{props.title}</span>
      </div>
  )
}

export default StatsBox