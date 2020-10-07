import React, { useState, useEffect } from 'react';
import TimeEntry from './TimeEntry';

function TimeEntryTable(props) {    //props: user, date

    const [table, setTable] = useState("");

    useEffect(() => {
        async function fillTimeEntryTable(props) {
            let data = await fetch("http://localhost:8080/api/times");
            data = await data.json();
            //console.log("Data:");
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (props.date === data[i].date && props.user === data[i].user) {
                    let TimeEntryArray = [];
                    for (let j = 0; j < data[i].times.length; j++) {
                        TimeEntryArray.push(<TimeEntry key={j} startTime={data[i].times[j].start} endTime={data[i].times[j].stop}></TimeEntry>);
                    }
                    //console.log("TimeEntryArray:");
                    //console.log(TimeEntryArray);
                    setTable(TimeEntryArray);
                }
            }
        }
        fillTimeEntryTable(props);
    }, [props.user, props.date, props]);

    //add sum of times
    return (<div id="TimeEntryTableDiv">TimeEntrys:{table}</div>);
}

export default TimeEntryTable;
