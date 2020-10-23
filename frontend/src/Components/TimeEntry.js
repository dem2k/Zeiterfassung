import React, { useEffect, useState } from 'react';

function TimeEntry(props) {

    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);
    const [duration, setDuration] = useState(subTime(startTime, endTime));
    const [timeSinceStart, setTimeSinceStart] = useState("00:00");

    useEffect(() => {
        setStartTime(props.startTime);
        setEndTime(props.endTime);
        setDuration(subTime(startTime, endTime));
    }, [props.startTime, props.endTime, startTime, endTime]);

    function subTime(time1, time2) {
        if (!time1 || !time2) return null;
        let hours = Number.parseInt(time2.split(":")[0]) - Number.parseInt(time1.split(":")[0]);
        if (hours < 0) hours = 24 - hours;
        if (hours < 10) hours = "0" + hours;
        let minutes = Number.parseInt(time2.split(":")[1]) - Number.parseInt(time1.split(":")[1]);
        if (minutes < 0) minutes = 60 - minutes;
        if (minutes < 10) minutes = "0" + minutes;

        return hours + ":" + minutes;
    }

    function buildTime(date) {
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        return hours + ":" + minutes;
    }

    const [showMenu, setShowMenu] = useState(false);

    const [newStart, setNewStart] = useState(startTime);
    const [newStop, setNewStop] = useState(endTime);

    function handleChangeStart(e) {
        setNewStart(e.target.value);
    }

    function handleChangeStop(e) {
        setNewStop(e.target.value);
    }

    let timeEntryPopup = <div className="TimeEntryPopup">
        <form>
            <label htmlFor="formStartTime">Start Time</label>
            <input type="time" id="formStartTime" onChange={handleChangeStart} name="formTime" defaultValue={startTime}></input>

            <label htmlFor="formEndTIme">End Time</label>
            <input type="time" id="formEndTime" onChange={handleChangeStop} name="formTime" defaultValue={endTime}></input>

            <button type="button" onClick={async () => {
                let data = await fetch("http://localhost:8080/api/times", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "id": props.id,
                        "user": props.user,
                        "date": props.date,
                        "start": newStart,
                        "stop": newStop
                    })
                });
                console.log("Saved Changes", data);
                setShowMenu(false);
                props.setTrigger(props.trigger + 1);
            }}>Save Changes</button>

            <button type="button" onClick={async () => {
                let data = await fetch("http://localhost:8080/api/times/" + props.id, { method: "DELETE" });
                console.log(data);
                props.setTrigger(props.trigger + 1);
            }}>Delete Entry</button>
        </form>
    </div>;
    let timeEntryMask = <div className="TimeEntryMask">
    </div>

    setTimeout(() => {
        setTimeSinceStart(subTime(startTime, buildTime(new Date())));
    }, 30000);

    return (
        <div>
            <div onClick={() => setShowMenu(!showMenu)} className="TimeEntry"><span>{startTime + " - " + (endTime === undefined ? "now" : endTime) + " | " + (duration === null ? timeSinceStart : duration)}</span></div>
            <div>{showMenu ? timeEntryPopup : null}</div>
            <div onClick={() => setShowMenu(false)}>{showMenu ? timeEntryMask : null}</div>
        </div>
    );
}

export default TimeEntry;