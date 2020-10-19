import React, { useState, useEffect } from 'react';
import TimeEntry from './TimeEntry';

function TimeEntryTable(props) {    //props: user, date

    const [table, setTable] = useState("");

    useEffect(() => {
        async function fillTimeEntryTable() {
            let data = await fetch("http://localhost:8080/api/times");
            data = await data.json();
            //console.log("Data:");
            console.log(data);
            let TimeEntryArray = [];
            for (let i = 0; i < data.length; i++) {
                if (props.date === data[i].date && props.user === data[i].user) {
                    props.setId(data[i].id);
                    for (let j = 0; j < data[i].times.length; j++) {
                        let startTime = data[i].times[j].start.split(":")[0] + ":" + data[i].times[j].start.split(":")[1];
                        let endTime = data[i].times[j].stop.split(":")[0] + ":" + data[i].times[j].stop.split(":")[1];
                        TimeEntryArray.push(<TimeEntry key={j} startTime={startTime} endTime={endTime} id={data[i].id}></TimeEntry>);
                    }
                    //console.log("TimeEntryArray:");
                    //console.log(TimeEntryArray);
                    break;
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
