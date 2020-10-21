import React, { useState, useEffect } from 'react';

function DateSelector(props) {
    const [showMenu, setShowMenu] = useState(false);

    const [dateDay, setDateDay] = useState(new Date().getDate());
    const [dateMonth, setDateMonth] = useState(new Date().getMonth() + 1);
    const [dateYear, setDateYear] = useState(new Date().getFullYear());

    const [monthArray] = useState(["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"]);

    const [daysArray, setDaysArray] = useState([]);

    useEffect(() => {
        const amountOfDaysArray = [31, dateYear % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let amountOfDays = amountOfDaysArray[dateMonth - 1];
        let tempDaysArray = [];
        for (let i = 1; i <= amountOfDays; i++) {
            tempDaysArray.push(<div key={i} className={i === dateDay ? "DateSelectorDaySelected" : ""}
                onClick={() => {
                    setDateDay(i);
                }
                }>{i}</div>);
        }
        setDaysArray(tempDaysArray);
    }, [dateMonth, dateYear, dateDay]);

    let dateSelectorPopup = <div className="DateSelectorPopup">
        <div className="DateSelectorMonths">
            <button onClick={() => {
                setDateMonth(Number.parseInt(dateMonth) - 1);
                if (Number.parseInt(dateMonth) < 2) setDateMonth(12);
            }}>&#9664;</button>
            <span>{monthArray[dateMonth - 1]}</span>
            <button onClick={() => {
                setDateMonth(Number.parseInt(dateMonth) + 1);
                if (Number.parseInt(dateMonth) > 11) setDateMonth(1);
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
        let date = dateYear + "-" + (dateMonth < 10 ? "0" + dateMonth : dateMonth) + "-" + (dateDay < 10 ? "0" + dateDay : dateDay);
        setDate(date);
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