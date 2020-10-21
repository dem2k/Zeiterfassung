/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import DateSelector from './../Components/DateSelector';
import TimeEntryTable from './../Components/TimeEntryTable';
import StartStopButton from './../Components/StartStopButton';

function MainView() {
    const [user, setUser] = useState("xtest");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [trigger, setTrigger] = useState(0); 

    

    return (
        <div className="MainView">
            <DateSelector date={date} setDate={setDate}></DateSelector>
            <TimeEntryTable user={user} date={date} trigger={trigger} setTrigger={setTrigger}></TimeEntryTable>
            <StartStopButton user={user} date={date} trigger={trigger} setTrigger={setTrigger}></StartStopButton>
        </div>
    );
}

export default MainView;