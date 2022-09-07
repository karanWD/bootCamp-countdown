import React, {useEffect, useState} from "react"
import "./Countdown.css"

const CountDown = () => {
    const [difference, setDifference] = useState(0)
    const [target, setTarget] = useState(0)

    // const targetDate = new Date("")
    const nowDate = new Date()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(difference / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(difference / (1000 * 60) % 60)
    const seconds = Math.floor(difference / (1000) % 60)
    // const milliSeconds = Math.floor(diffrence % 1000 ).toString().slice(-2)

    useEffect(() => {
        const timer  = setTimeout( () => {
            setDifference(target-nowDate)
        }, 1000)
        return () => clearTimeout(timer)
    }, [difference,target])

    return (
        <div className={`container `}>
            <div>
                <input type="date" onChange={event => setTarget(new Date(event.target.value))}/>
                <h1>
                    COMING
                    <span className={"soon-animate"}>SOON</span>

                </h1>
                <div className={`countdown-items ${difference>0 && "visible"}`}>
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
