import { useEffect, useState } from "react"
import AlarmList from "./AlarmList"
import AlarmSetter from "./AlarmSetter"
import "./App.css"

function App() {
    const [alarms, setAlarms] = useState([])

    function addAlarm(alarmObj) {
        setAlarms((prevAlarms) => [...prevAlarms, alarmObj])
        setAlarm(alarmObj)
    }

    function setAlarm({ hour, minute, interval, ringOnce }) {
        const alarmInterval = setInterval(() => {
            let currentHour = new Date().getHours()
            let currentMinute = new Date().getMinutes()

            if (interval === "AM") {
                if (hour === currentHour && minute === currentMinute) {
                    if (ringOnce) {
                        alert("ring ring ring ring")
                        clearInterval(alarmInterval)
                        return
                    }
                    alert("ring ring ring ring")
                }
            } else {
            }
        }, 1000)
    }

    return (
        <main className="alarm-container">
            <AlarmList alarms={alarms} />
            <AlarmSetter addAlarm={addAlarm} />
        </main>
    )
}

export default App
