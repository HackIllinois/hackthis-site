import React, { useState, useEffect } from 'react';

import styles from './style.module.scss';
import Scheduler from 'components/Scheduler';
import logo from 'assets/logo.svg';
import Loading from 'components/Loading';
import { getMentorTimeslots, getRolesSync, setMentorTimeslots } from 'api';

const colors = [
  '#CF3E7F', '#F15D4B', '#5DBEBD', '#46959F', '#3C519C', '#2A3072',
  '#68380F', '#01A44E', '#4B7BB9', '#C31C2D',
];

const addColors = events => events.map(event => {
  // the following ensures that events with the same email get the same color
  const { email = '' } = event;
  const num = email.split('').reduce((total, character) => total + character.charCodeAt(0), 0);
  return { ...event, color: colors[num % colors.length] };
});

const removeColors = events => events.map(event => {
  const { color, ...remainingEvent } = event;
  return remainingEvent;
});

const removeExtraData = events => removeColors(events).map(event => {
  for (const key of Object.keys(event)) {
    if (key.startsWith('_')) {
      delete event[key];
    }
  }
  return event;
});

// we assume that all events without an email currently were created by the current user
// (if there's an email already specified in event, it will override the provided mentorEmail)
const addEmails = (events, mentorEmail = '') => events.map(event => ({ email: mentorEmail, ...event }));

const startDate = new Date(2020, 7, 7);
const eventStartTime = new Date(1596841200000);
const eventEndTime = new Date(1597431600000);

const MentorAvailability = () => {
  // before doing anything else, save any parameters that were passed through the url query and remove them from the url
  const url = new URL(window.location.href);
  if (url.search) {
    if (url.searchParams.get('token')) {
      sessionStorage.token = url.searchParams.get('token');
    }
    if (url.searchParams.get('name')) {
      sessionStorage.mentorName = url.searchParams.get('name');
    }
    if (url.searchParams.get('email')) {
      sessionStorage.mentorEmail = url.searchParams.get('email');
    }
    window.history.replaceState(null, 'title', `${url.origin}${url.pathname}`);
  }

  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateEvents = newEvents => {
    setMentorTimeslots(removeExtraData(addEmails(newEvents, sessionStorage.mentorEmail))).then(timeslots => {
      setEvents(addColors(timeslots));
    }).catch(() => {
      alert('There was an error while editing. If this error persists, please email contact@hackillinois.org')
    });
  };

  useEffect(() => {
    getMentorTimeslots().then(timeslots => {
      setEvents(addColors(timeslots));
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const roles = getRolesSync();
  const readOnly = !(roles.includes('Admin') || roles.includes('Blobstore'));

  const timezone = /\((.*)\)/.exec(new Date().toString())[1]; // extracts contents of parentheses in result of Date.toString

  const instructions = readOnly
    ? "If you're a mentor, please use the link you received by email to add your timeslots"
    : `Click and drag to add your available time slots (in ${timezone}). We encourage you to sign up for slots that have fewer mentors!`;
  
  return (
    <div className={styles['mentor-availability']}>
      <div className={styles.instructions}>
        {instructions}
      </div>

      <div className={styles['calendar-container']}>
        <Scheduler
          logo={logo}
          logoLink="/"
          startDate={startDate}
          events={events}
          onChange={updateEvents}
          eventTextPlaceholder={sessionStorage.mentorName || 'Full Name'}
          eventStartTime={eventStartTime}
          eventEndTime={eventEndTime}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}

export default MentorAvailability;
