/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function TimeEntry(props) {

    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);

    function subTime(time1, time2) {
        let hours = Number.parseInt(time2.split(":")[0]) - Number.parseInt(time1.split(":")[0]);
        if (hours < 0) hours = 24 - hours;
        if (hours < 10) hours = "0" + hours;
        let minutes = Number.parseInt(time2.split(":")[1]) - Number.parseInt(time1.split(":")[1]);
        if (minutes < 0) minutes = 60 - minutes;
        if (minutes < 10) minutes = "0" + minutes;

        return hours + ":" + minutes;
    }
    const [duration, setDuration] = useState(subTime(startTime, endTime));

    const [showMenu, setShowMenu] = useState(false);

    let timeEntryPopup = <div className="TimeEntryPopup">
        <form>
            <label htmlFor="formStartTime">Start Time</label>
            <input type="time" id="formStartTime" name="formTime" defaultValue={startTime}></input>

            <label htmlFor="formEndTIme">End Time</label>
            <input type="time" id="formEndTime" name="formTime" defaultValue={endTime}></input>

            <button type="button" onClick={() => {

            }}>Save Changes</button>
            
            <button type="button" onClick={async () => {
                let delData = await fetch("http://localhost:8080/timeEntryDays/" + props.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log("Deleted:")
                console.log(delData);
            }}>Delete Entry</button>
        </form>
    </div>;
    let timeEntryMask = <div className="TimeEntryMask">

    </div>

    return (
        <div>
            <div onClick={() => setShowMenu(!showMenu)} className="TimeEntry"><span>{startTime + " - " + endTime + " | " + duration}</span></div>
            <div>{showMenu ? timeEntryPopup : null}</div>
            <div onClick={() => setShowMenu(false)}>{showMenu ? timeEntryMask : null}</div>
        </div>
    );
}

export default TimeEntry;