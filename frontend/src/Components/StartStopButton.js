import React, { useState } from 'react';

function StartStopButton(props) {

    const [recording, setRecording] = useState(false);
    const [currentStartTime, setCurrentStartTime] = useState("00:00");

    function buildTime(date) {
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        return hours + ":" + minutes;
    }

    return (
        <button onClick={
            async () => {
                if (recording) {
                    let data = await fetch("http://localhost:8080/api/times", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "user": "alex",
                            "date": props.date,
                            "times": [
                                { "start": currentStartTime, "stop": buildTime(new Date())},
                            ]
                        })
                    });
                    props.setTrigger(props.trigger + 1);
                    console.log(data);
                } else {
                   setCurrentStartTime(buildTime(new Date()));
                }
                setRecording(!recording);
            }
        } type="button" className={recording ? "StopButton" : "StartButton"}>{recording ? "Stop" : "Start"}</button>
    );
}

export default StartStopButton;