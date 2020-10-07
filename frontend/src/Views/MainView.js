import React from 'react';
import DateSelector from './../Components/DateSelector';
import TimeEntryTable from './../Components/TimeEntryTable';
import StartStopButton from './../Components/StartStopButton';

function MainView() {
    return (
        <div>
            <DateSelector></DateSelector>
            <TimeEntryTable user="alex" date="2020-10-06"></TimeEntryTable>
            <StartStopButton></StartStopButton>
        </div>
    );
}

export default MainView;