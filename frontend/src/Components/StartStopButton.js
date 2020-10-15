import React from 'react';

function StartStopButton() {
    return (
        <button onClick={
            async () => {
                let newEntry = {
                    "user": "jesus",
                    "date": "2020-15-10",
                    "times": [
                        { "start": "08:08", "stop": "08:09" },
                        { "start": "9:09", "stop": "9:10" }
                    ]
                }
                let data = await fetch("http://localhost:8080/api/times", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: newEntry
                });
                console.log(data);
            }
        } type="button" className="StartStopButton">Start</button>
    );
}

export default StartStopButton;