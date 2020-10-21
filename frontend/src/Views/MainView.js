/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import DateSelector from './../Components/DateSelector';
import TimeEntryTable from './../Components/TimeEntryTable';
import StartStopButton from './../Components/StartStopButton';

function MainView() {
    const [user, setUser] = useState("alex");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [id, setId] = useState("");

    return (
        <div className="MainView">
            <DateSelector date={date} setDate={setDate}></DateSelector>
            <TimeEntryTable user={user} date={date} setId={setId}></TimeEntryTable>
            <StartStopButton></StartStopButton>
        </div>
    );
}

export default MainView;