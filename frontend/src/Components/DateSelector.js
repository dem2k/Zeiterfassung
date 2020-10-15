import React, { useState } from 'react';

function DateSelector(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    let monthArray = ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const [monthIndex, setMonthIndex] = useState(9);

    let daysArray = [];
    for (let i = 1; i <= 31; i++) {
        daysArray.push(<div key={i}>{i}</div>);
    }

    const [year, setYear] = useState(startDate.getFullYear());

    let dateSelectorPopup = <div className="DateSelectorPopup">
        <div className="DateSelectorMonths">
            <button onClick={() => {
                setMonthIndex(monthIndex - 1);
                if (monthIndex < 1) setMonthIndex(11);
            }}>&#9664;</button>
            <span>{monthArray[monthIndex]}</span>
            <button onClick={() => {
                setMonthIndex(monthIndex + 1);
                if (monthIndex > 10) setMonthIndex(0);
            }}>&#9654;</button>

        </div>
        <div className="DateSelectorDays">{daysArray}</div>
        <div className="DateSelectorYears">
            <button onClick={() => setYear(year - 1)}>&#9664;</button>
            <span>{year}</span>
            <button onClick={() => setYear(year + 1)}>&#9654;</button>
        </div>
    </div>
    let dateSelectorMask = <div className="DateSelectorMask">
    </div>

    return (
        <div className="DateSelector">
            <span onClick={() => setShowMenu(true)}>Date Selector</span><span onClick={() => setShowMenu(true)}>{props.date}</span>
            <div>{showMenu ? dateSelectorPopup : null}</div>
            <div onClick={() => setShowMenu(false)}>{showMenu ? dateSelectorMask : null}</div>
        </div>
    );
}

export default DateSelector;