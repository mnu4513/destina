import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [dayToDayEvents, setDayToDayEvents] = useState([
    { date: new Date(2023, 1, 1), type: 'dayToDay', description: 'Meeting with client' },
    { date: new Date(2023, 1, 5), type: 'dayToDay', description: 'Project deadline' },
  ]);

  const [socialMediaEvents, setSocialMediaEvents] = useState([
    { date: new Date(2023, 1, 3), type: 'socialMedia', description: 'Instagram post' },
    { date: new Date(2023, 1, 8), type: 'socialMedia', description: 'Tweet about the project' },
  ]);

  const getTileContent = ({ date, view }) => {
    const dayToDayEvent = dayToDayEvents.find((event) => event.date.toDateString() === date.toDateString());
    const socialMediaEvent = socialMediaEvents.find((event) => event.date.toDateString() === date.toDateString());

    return (
      <div>
        <p>hello</p>
        {dayToDayEvent && <div style={{ color: 'green' }}>{dayToDayEvent.description}</div>}
        {socialMediaEvent && <div style={{ color: 'blue' }}>{socialMediaEvent.description}</div>}
      </div>
    );
  };

  return (
    <div>
        <p>hello</p>
      <h2>Responsive Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={getTileContent}
        calendarType="US"
        locale="en-US"
      />
    </div>
  );
};

export default Calendar;
