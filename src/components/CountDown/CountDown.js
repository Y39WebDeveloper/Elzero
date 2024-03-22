import './CountDown.css'

const CountDown = (props) => {
    function TimerCountDown(){
        let countDownDate = new Date(`${props.month} ${props.day}, ${props.year} ${props.hours}:${props.min}:${props.sec}`).getTime();
        let counter = setInterval(() => {
            let dateNow = new Date().getTime();
            let datsDiff = countDownDate - dateNow;

            let days = Math.floor(datsDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((datsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((datsDiff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((datsDiff % (1000 * 60)) / 1000);

            document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
            document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
            document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
            document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

            if (datsDiff < 0) {
                clearInterval(counter);

                document.querySelector(".days").innerHTML = 99;
                document.querySelector(".hours").innerHTML = 24;
                document.querySelector(".minutes").innerHTML = 60;
                document.querySelector(".seconds").innerHTML = 60;
            }
        }, 1000);
    }
  return (
      <div className="time" onLoad={TimerCountDown()}>
          <div className="unit">
              <span className="days"></span>
              <span>Days</span>
          </div>
          <div className="unit">
              <span className="hours"></span>
              <span>Hours</span>
          </div>
          <div className="unit">
              <span className="minutes"></span>
              <span>Minutes</span>
          </div>
          <div className="unit">
              <span className="seconds"></span>
              <span>Seconds</span>
          </div>
      </div>
  )
}

export default CountDown