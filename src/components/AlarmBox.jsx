function AlarmBox({ hour, minute, interval, title, ringOnce }) {
    return (
        <>
            <div className="alarm-div">
                <h4 style={{ marginBottom: "0.6rem" }}>{title}</h4>
                <div className="alarm-box">
                    <div className="alarm-time">
                        {hour}:{minute} <span>{interval}</span>
                    </div>
                    <div className="alarm-switch">
                        <input type="checkbox" />
                    </div>
                </div>

                {ringOnce && <p>Ring Once</p>}
            </div>
        </>
    )
}

export default AlarmBox
