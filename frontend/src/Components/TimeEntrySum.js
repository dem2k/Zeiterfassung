import React, { useEffect, useState } from 'react';

function TimeEntrySum(props) {

    const [startSum, setStartSum] = useState();
    const [endSum, setEndSum] = useState();
    const [durationSum, setDurationSum] = useState();

    useEffect(() => {
        let startTime;
        let endTime;
        let duration = "00:00";
        if (props.table.length === 0) {
            setStartSum("00:00");
            setEndSum("00:00");
            setDurationSum("00:00");
        } else {
            for (let i = 0; i < props.table.length; i++) {
                let propStart = props.table[i].props.startTime;
                let propEnd = props.table[i].props.endTime;

                //StartTime
                if (startTime === undefined || Number.parseInt(propStart.split(":")[0]) < Number.parseInt(startTime.split(":")[0])) {
                    startTime = propStart;
                } else if (Number.parseInt(propStart.split(":")[0]) === Number.parseInt(startTime.split(":")[0]) &&
                    Number.parseInt(propStart.split(":")[1]) < Number.parseInt(startTime.split(":")[1])) {
                    startTime = propStart;
                }

                //EndTime
                if (endTime === undefined || Number.parseInt(propEnd.split(":")[0]) > Number.parseInt(endTime.split(":")[0])) {
                    endTime = propEnd;
                } else if (Number.parseInt(propEnd.split(":")[0]) === Number.parseInt(endTime.split(":")[0]) &&
                    Number.parseInt(propEnd.split(":")[1]) > Number.parseInt(endTime.split(":")[1])) {
                    endTime = propEnd;
                }

                //Duration
                duration = addTime(duration, subTime(propStart, propEnd));
                setStartSum(startTime);
                setEndSum(endTime);
                setDurationSum(duration);
            }
        }
        function subTime(time1, time2) {
            let hours = Number.parseInt(time2.split(":")[0]) - Number.parseInt(time1.split(":")[0]);
            if (hours < 0) hours = 24 - hours;
            if (hours < 10) hours = "0" + hours;
            let minutes = Number.parseInt(time2.split(":")[1]) - Number.parseInt(time1.split(":")[1]);
            if (minutes < 0) minutes = 60 - minutes;
            if (minutes < 10) minutes = "0" + minutes;

            return hours + ":" + minutes;
        }
        function addTime(time1, time2) {
            let hours = Number.parseInt(time2.split(":")[0]) + Number.parseInt(time1.split(":")[0]);
            if (hours < 10) hours = "0" + hours;
            let minutes = Number.parseInt(time2.split(":")[1]) + Number.parseInt(time1.split(":")[1]);
            if (minutes < 10) minutes = "0" + minutes;
            return hours + ":" + minutes;
        }
    }, [props]);

    return (
        <div className="TimeEntrySum">
            <header>Day Total</header>
            <span>{startSum + " - " + endSum + " | " + durationSum}</span>
        </div>
    );
}

export default TimeEntrySum;