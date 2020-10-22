import React, { useState, useEffect } from 'react';
import TimeEntry from './TimeEntry';
import TimeEntrySum from './TimeEntrySum';

function TimeEntryTable(props) {

    const [table, setTable] = useState("");

    useEffect(() => {
        async function fillTimeEntryTable() {
            let data = await fetch("http://localhost:8080/api/times");
            try {data = await data.json();} catch {
                setTable([]);
                return;
            }
            console.log(data);
            let TimeEntryArray = [];
            for (let i = 0; i < data.length; i++) {
                if (props.date === data[i].date && props.user === data[i].user) {
                    let startTime = data[i].start.split(":")[0] + ":" + data[i].start.split(":")[1];
                    let endTime;
                    if (data[i].stop != null) endTime = data[i].stop.split(":")[0] + ":" + data[i].stop.split(":")[1];
                    TimeEntryArray.push(<TimeEntry key={data[i].id} startTime={startTime} endTime={endTime} id={data[i].id} trigger={props.trigger} setTrigger={props.setTrigger}></TimeEntry>);
                }
            }
            props.setRecording(Boolean(TimeEntryArray[TimeEntryArray.length - 1].props.endTime === null ||
                TimeEntryArray[TimeEntryArray.length - 1].props.endTime === undefined));
            props.setLastId(TimeEntryArray[TimeEntryArray.length - 1].props.id);
            props.setLastStart(TimeEntryArray[TimeEntryArray.length - 1].props.startTime);
            setTable(TimeEntryArray);
        }
        fillTimeEntryTable();
    }, [props]);

    /* 
    useEffect(() => {
        //props.setLastEntry(table[table.length -1]);
    }, [table]); */

    //add sum of times
    return (<div className="TimeEntryTable">Times: {table} <TimeEntrySum table={table}></TimeEntrySum></div>);
}

export default TimeEntryTable;
