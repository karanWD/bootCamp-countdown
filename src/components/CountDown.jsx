import React, {useEffect, useState} from "react"

const CountDown = () => {
    const [target, setTarget] = useState()
    const targetDate = new Date("2022,3,20")
    const nowDate = new Date()
    const diffrence = targetDate - nowDate
    const [countDown, setCountDown] = useState()
    const days = Math.floor(diffrence / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diffrence / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(diffrence / (1000 * 60) % 60)
    const seconds = Math.floor(diffrence / (1000) % 60)
    // const milliSeconds = Math.floor(diffrence % 1000 ).toString().slice(-2)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCountDown({
                days,
                hours,
                minutes,
                seconds,
                // milliSeconds
            })
        }, 1000)
        return () => clearTimeout(timer)
    }, [diffrence, target])
    return (
        <div>
            <input type="date" onChange={event => setTarget(new Date(event.target.value))}/>
            <h1>COMING SOON</h1>
            <div>
                <h3>{countDown?.days}</h3>
                <span>روز</span>
            </div>
            <div>
                <h3>{countDown?.hours}</h3>
                <span>ساعت</span>
            </div>
            <div>
                <h3>{countDown?.minutes}</h3>
                <span>دقیقه</span>
            </div>
            <div>
                <h3>{countDown?.seconds}</h3>
                <span>ثانیه</span>
            </div>
            {/*<div>*/}
            {/*    <h3>{countDown?.milliSeconds}</h3>*/}
            {/*    <span>میلی ثانیه</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default CountDown
