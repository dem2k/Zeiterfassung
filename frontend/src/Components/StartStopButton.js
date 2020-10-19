import React from 'react';

function StartStopButton() {
    return (
        <button onClick={
            async () => {
                let newEntry = {
                    "user": "peter",
                    "date": "2020-10-15",
                    "times": [
                        { "start": "18:09", "stop": "22:01" },
                        { "start": "18:01", "stop": "23:01" }
                    ]
                }
                let data = await fetch("http://localhost:8080/api/times", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: {
                        "user": "alex",
                        "date": "2020-10-15",
                        "times": [
                            { "start": "18:09", "stop": "22:01" },
                            { "start": "18:01", "stop": "23:01" }
                        ]
                    }
                });
                console.log(data);
            }
        } type="button" className="StartStopButton">Start</button>
    );
}

export default StartStopButton;