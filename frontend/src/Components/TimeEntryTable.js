import React, { useState, useEffect } from 'react';
import TimeEntry from './TimeEntry';

function TimeEntryTable(props) {

    const [table, setTable] = useState("");

    useEffect(() => {
        async function fillTimeEntryTable() {
            let data = await fetch("http://localhost:8080/api/times");
            data = await data.json();
            console.log(data);
            let TimeEntryArray = [];
            for (let i = 0; i < data.length; i++) {
                if (props.date === data[i].date && props.user === data[i].user) {
                    for (let j = 0; j < data[i].times.length; j++) {
                        let startTime = data[i].times[j].start.split(":")[0] + ":" + data[i].times[j].start.split(":")[1];
                        let endTime = data[i].times[j].stop.split(":")[0] + ":" + data[i].times[j].stop.split(":")[1];
                        TimeEntryArray.push(<TimeEntry key={data[i].id + ":" + j} startTime={startTime} endTime={endTime}></TimeEntry>);
                    }
                    //break;
                }
            }
            setTable(TimeEntryArray);
        }
        fillTimeEntryTable();
    }, [props]);

    //add sum of times
    return (<div className="TimeEntryTable">Times: {table}</div>);
}

export default TimeEntryTable;
