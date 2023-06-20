import { useRef } from "react"
import HoursOption from "./HoursOption"
import MinutesOption from "./MinutesOption"

// eslint-disable-next-line react/prop-types
function AlarmSetter({ addAlarm }) {
    const hourRef = useRef()
    const minuteRef = useRef()
    const intervalRef = useRef()
    const titleRef = useRef()
    const ringOnceRef = useRef()

    function setAlarm() {
        if (titleRef.current.value === "") {
            alert("Title is missing")
            return
        }
        let alarmObj = {
            hour: parseInt(hourRef.current.value),
            minute: parseInt(minuteRef.current.value),
            interval: intervalRef.current.value,
            title: titleRef.current.value,
            ringOnce: ringOnceRef.current.checked,
        }
        addAlarm(alarmObj)
    }

    return (
        <>
            <div className="alarm-setter">
                <h2>Add Alarm</h2>
                <br />
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="hours">Hours</label>
                        <br />
                        <select id="hours" ref={hourRef}>
                            <HoursOption />
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="minutes">Minutes</label>
                        <br />
                        <select id="minutes" ref={minuteRef}>
                            <MinutesOption />
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="interval">Interval</label>
                        <br />
                        <select id="interval" ref={intervalRef}>
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <br />
                        <input type="text" placeholder="Alarm" ref={titleRef} />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" ref={ringOnceRef} id="once" />{" "}
                        &nbsp;
                        <label htmlFor="once">Ring Once</label>
                    </div>
                </form>
                <button onClick={setAlarm}>Set Alarm</button>
            </div>
        </>
    )
}

export default AlarmSetter
