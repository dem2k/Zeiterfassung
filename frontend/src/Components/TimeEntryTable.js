import React, { useState, useEffect } from 'react';
import TimeEntry from './TimeEntry';
import TimeEntrySum from './TimeEntrySum';

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
                    let startTime = data[i].start.split(":")[0] + ":" + data[i].start.split(":")[1];
                    let endTime = data[i].stop.split(":")[0] + ":" + data[i].stop.split(":")[1];
                    TimeEntryArray.push(<TimeEntry key={data[i].id} startTime={startTime} endTime={endTime} id={data[i].id} trigger={props.trigger} setTrigger={props.setTrigger}></TimeEntry>);
                }
            }
            setTable(TimeEntryArray);
        }
        fillTimeEntryTable();
    }, [props]);

    //add sum of times
    return (<div className="TimeEntryTable">Times: {table} <TimeEntrySum table={table}></TimeEntrySum></div>);
}

export default TimeEntryTable;
