import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';
import NavBar from 'components/NavBar';
import topLeft from 'assets/schedule/top_left.svg';
import Loading from 'components/Loading';
import { getEvents } from 'api';
import { sortEventsIntoDays, getSurroundingWeeks } from './events';
import Message from 'components/Message';

const eventTypes = {
  OTHER: {
    name: 'General Event Stuff',
    color: '#F9C669',
  },
  SPEAKER: {
    name: 'Talks',
    color: '#E8AECC',
  },
  WORKSHOP: {
    name: 'Workshops',
    color: '#3C519C',
  },
  MINIEVENT: {
    name: 'Mini Events',
    color: '#5DBEBD',
  },
  MEAL: {
    name: 'Challenges',
    color: '#F15D4B',
  }
};

const formatTime = seconds => new Date(seconds * 1000).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' });

const mobileDots = [
  { left: -10, top: 70, width: 30, height: 12 },
  { right: 90, top: 40, width: 10, height: 10 },
  { right: 10, top: 100, width: 15, height: 15 },
  { left: 15, top: 160, width: 7, height: 7 },
]

const urlRegex = /https?:\/\/((www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*))/g;
const processLinks = description => description.replace(urlRegex, '<a href="$&" target="_blank" rel="noopener noreferrer">$1</a>');
const processBullets = description => description.replace(/•/g, '<span style="font-family: Calibri, Verdana, Tahoma, Impact, sans-serif">•</span>');
const processEventDescription = description => processLinks(processBullets(description));

const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

const Schedule = () => {
  const [eventsByDay, setEventsByDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    getEvents().then(events => {
      const sorted = sortEventsIntoDays(events)
      setEventsByDay(sorted);

      // if today is one of the event dates, set the selected date to today
      const today = formatDate(new Date());
      sorted.forEach((day, i) => {
        if (formatDate(day.date) === today) {
          setSelectedDay(i);
        }
      })
    });
  }, []);

  const handleCalendarDateClick = index => {
    if (Number.isInteger(index) && index >= 0 && index < eventsByDay.length) {
      setSelectedDay(index);
    }
  }

  if (!Array.isArray(eventsByDay)) {
    return <Loading />
  }

  if (eventsByDay.length === 0) {
    return <Message>No events found. Check back soon!</Message>
  }

  const currentDay = eventsByDay[selectedDay];
  const firstDate = eventsByDay[0].date;
  const weeks = getSurroundingWeeks(firstDate, eventsByDay.length);

  const timezone = /\((.*)\)/.exec(new Date().toString())[1];

  return (
    <div className={clsx(styles.schedule, weeks.length > 2 && styles['three-weeks'])}>
      <NavBar light blueLink />

      <div className={styles['top-left-decoration']}>
        <img src={topLeft} alt="" />
      </div>

      <div className={styles['mobile-decoration']}>
        {mobileDots.map(style => (
          <div className={styles.dot} style={style} />
        ))}
      </div>

      <div className={styles['calendar-container']}>
        <p className={styles.month}>{firstDate.toLocaleString('en-US', { month: 'long' })}</p>
        {weeks.map(week => (
          <div className={styles.week}>
            {week.map(({ date, index }) => (
              <div
                className={clsx(styles.day, Number.isInteger(index) && styles.clickable, index === selectedDay && styles.selected)}
                onClick={() => handleCalendarDateClick(index)}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        ))}

        <div className={styles.calendar}>
          <div className={styles.rings}>
            {Array(5).fill(0).map(() => <div className={styles.ring} />)}
          </div>

          <div className={styles.content}>
            <div className={styles.green} />
            <div className={styles['current-month']}>{currentDay.month}</div>
            <div className={styles['day-of-week']}>{currentDay.dayOfWeek}</div>
            <div className={styles['day-of-month']}>{currentDay.dayOfMonth}</div>
          </div>

          {selectedDay === 0 && (
            <div className={styles['hackathon-begins']}>Hackathon Begins!</div>
          )}
        </div>
      </div>

      <div className={styles.guide}>
        <h2>GUIDE</h2>
        {Object.values(eventTypes).map(({ name, color }) => (
          <div className={styles['event-type']}>
            <div className={styles.circle} style={{ backgroundColor: color }} />
            <h4 className={styles.name}>{name}</h4>
          </div>
        ))}

        <div className={styles.dot} style={{ right: 25, top: -4, height: 8, width: 8 }} />
        <div className={styles.dot} style={{ left: 70, bottom: -6, height: 12, width: 12 }} />
      </div>

      <div className={styles['events-section']}>
        <div className={styles.heading}>{currentDay.month} {currentDay.dayOfMonth} - {currentDay.dayOfWeek}</div>
        <div className={styles.timezone}>(All times are in {timezone})</div>

        <div className={styles.events}>
          {currentDay.events.map(({ startTime, endTime, eventType, name, description }) => (
            <div className={styles.event}>
              <div className={styles.times}>
                <div className={styles.start}>{formatTime(startTime)}</div>
                { startTime !== endTime && (
                  <div className={styles.end}>{formatTime(endTime)}</div>
                )}
              </div>

              <div className={styles['color-line']} style={{ backgroundColor: eventTypes[eventType].color }} />
              
              <div>
                <div className={styles.name}>{name}</div>
                {description.trim() && (
                  <div className={styles.description} dangerouslySetInnerHTML={{ __html: processEventDescription(description) }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule;