/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

function TimeEntry(props) {
    
    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);

    return (
        <div>
            <span>{startTime + " - " + endTime}</span> <span>{startTime+endTime}</span>
        </div>
    );
}

export default TimeEntry;