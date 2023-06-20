import AlarmBox from "./AlarmBox"

function AlarmList({ alarms }) {
    return (
        <>
            <div className="alarm-lists">
                <h2>Alarm</h2>
                <br />
                {alarms.length === 0 && (
                    <p>
                        <i>! Currently no alarms set</i>
                    </p>
                )}
                <div className="alarm-scroll">
                    {alarms.map((alarm, index) => {
                        return (
                            <AlarmBox
                                key={index}
                                hour={alarm.hour}
                                minute={alarm.minute}
                                interval={alarm.interval}
                                title={alarm.title}
                                ringOnce={alarm.ringOnce}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AlarmList
