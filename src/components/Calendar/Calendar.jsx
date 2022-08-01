import React from 'react';
import './calendar.css'
import icon from '../../img/CalendarIcon.svg'

const Calendar = () => {
    return (
        <div className='calendar'>
            <img src={icon} alt='calendar' className='calendar__day-icon'></img>
            <h1 className='calendar__day-weeks'>Today</h1>
        </div>
    )
}

export default Calendar;
