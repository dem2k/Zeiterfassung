import React, { useState } from 'react';

function StartStopButton(props) {

    //const [recording, setRecording] = useState(false);
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
                console.log(props);
                if (!props.recording) {
                    let data = await fetch("http://localhost:8080/api/times", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "user": props.user,
                            "date": props.date,
                            "start": buildTime(new Date()),
                            "stop": null
                        })
                    });
                    props.setTrigger(props.trigger + 1);
                    console.log(data);
                } else {
                    let data = await fetch("http://localhost:8080/api/times", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "id": props.lastId,
                            "user": props.user,
                            "date": props.date,
                            "start": props.lastStart,
                            "stop": buildTime(new Date())
                        })
                    });
                    props.setTrigger(props.trigger + 1);
                    console.log(data);
                }
            }
        } type="button" className={props.recording ? "StopButton" : "StartButton"}>{props.recording ? "Stop" : "Start"}</button>
    );
}

export default StartStopButton;