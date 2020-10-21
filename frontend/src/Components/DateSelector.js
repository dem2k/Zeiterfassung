import React, { useState, useEffect } from 'react';

function DateSelector(props) {
    const [showMenu, setShowMenu] = useState(false);

    const [dateDay, setDateDay] = useState(new Date().getDate());
    const [dateMonth, setDateMonth] = useState(new Date().getMonth() + 1);
    const [dateYear, setDateYear] = useState(new Date().getFullYear());

    let monthArray = ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"];

    let amountOfDaysArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const [amountOfDays] = useState(amountOfDaysArray[dateMonth]);

    let daysArray = [];
    for (let i = 1; i <= amountOfDays; i++) {
        daysArray.push(<div key={i} className={i === dateDay ? "DateSelectorDaySelected" : ""}
            onClick={() => {
                setDateDay(i);
                for (let i = 0; i < amountOfDays; i++) {

                }
            }
            }>{i}</div>);
    }

    let dateSelectorPopup = <div className="DateSelectorPopup">
        <div className="DateSelectorMonths">
            <button onClick={() => {
                setDateMonth(dateMonth - 1);
                if (dateMonth < 2) setDateMonth(12);
            }}>&#9664;</button>
            <span>{monthArray[dateMonth - 1]}</span>
            <button onClick={() => {
                setDateMonth(dateMonth + 1);
                if (dateMonth > 11) {
                    setDateMonth(1);
                }
            }}>&#9654;</button>

        </div>
        <div className="DateSelectorDays">{daysArray}</div>
        <div className="DateSelectorYears">
            <button onClick={() => setDateYear(dateYear - 1)}>&#9664;</button>
            <span>{dateYear}</span>
            <button onClick={() => setDateYear(dateYear + 1)}>&#9654;</button>
        </div>
    </div>
    let dateSelectorMask = <div className="DateSelectorMask">
    </div>

    let setDate = props.setDate;
    useEffect(() => {
        let date = dateYear + "-" + dateMonth + "-" + dateDay;
        setDate(date);
        //daysArray[dateDay]
    }, [dateDay, dateMonth, dateYear, setDate]);

    return (
        <div className="DateSelector">
            <span onClick={() => setShowMenu(true)}>Date Selector</span><span onClick={() => setShowMenu(true)}>{props.date}</span>
            <div>{showMenu ? dateSelectorPopup : null}</div>
            <div onClick={() => setShowMenu(false)}>{showMenu ? dateSelectorMask : null}</div>
        </div>
    );
}

export default DateSelector;