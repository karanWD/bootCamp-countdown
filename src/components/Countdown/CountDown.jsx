import React, {useEffect, useState} from "react"
import "./Countdown.css"

const CountDown = () => {
    console.log(new Date("Mon Mar 16,2022"))

    const targetDate = new Date("2022,3,20")
    const nowDate = new Date()
    const [diffrence, setDiffrence] = useState(0)
    const days = Math.floor(diffrence / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diffrence / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(diffrence / (1000 * 60) % 60)
    const seconds = Math.floor(diffrence / (1000) % 60)

    // const [target, setTarget] = useState()
    // const milliSeconds = Math.floor(diffrence % 1000 ).toString().slice(-2)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDiffrence(targetDate - nowDate)

        }, 1000)
        return () => clearTimeout(timer)
    }, [diffrence])

    return (
        <div className={`container `}>
            <div>
                {/*<input type="date" onChange={event => setTarget(new Date(event.target.value))}/>*/}
                <h1>
                    COMING
                    <span className={"soon-animate"}>SOON</span>

                </h1>
                <div className={`countdown-items ${diffrence>0 && "visible"}`}>
                    <div>
                        <h3>{days}</h3>
                        <span>Days</span>
                    </div>
                    <div>
                        <h3>{hours}</h3>
                        <span>Hours</span>
                    </div>
                    <div>
                        <h3>{minutes}</h3>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <h3>{seconds}</h3>
                        <span>Seconds</span>
                    </div>
                </div>

            </div>

            {/*<div>*/}
            {/*    <h3>{countDown?.milliSeconds}</h3>*/}
            {/*    <span>میلی ثانیه</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default CountDown
