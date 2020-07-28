import React, { useEffect, useRef } from 'react';

import styles from './style.module.scss';
import './style-overrides.scss';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css'
import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const { scheduler } = window;

const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

const dateAt12am = date => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const dayDifference = (date1, date2) => Math.floor((dateAt12am(date2)- dateAt12am(date1)) / 1000 / 60 / 60 / 24);


const Scheduler = ({ logo, logoLink, startDate, events, onChange, eventTextPlaceholder, readOnly = false }) => {
  const [currentDate, setCurrentDate] = useState(startDate);

  // careful when setting weekStartOffset or weekEndOffset to a function (https://reactjs.org/docs/hooks-reference.html#functional-updates)
  const [weekStartOffset, setWeekStartOffset] = useState(() => date => -date.getDay());
  const [weekEndOffset, setWeekEndOffset] = useState(() => date => -date.getDay() + 7);

  const schedulerContainer = useRef(null);

  useEffect(() => {
    scheduler.config.readonly = readOnly;
    scheduler.skin = 'material';
    scheduler.config.lightbox.sections = [
      { name: "Full Name", height: 30, map_to: "text", type: "textarea", focus: true },
      { name: "time", height: 72, type: "time", map_to: "auto" }
    ]
    scheduler.locale.labels.confirm_deleting = null;
    scheduler.config.hour_date = '%h:%i %A';
    scheduler.templates.event_class = () => 'dhtmlx-scheduler-event';
    scheduler.xy.scale_width = 70;
    scheduler.config.start_on_monday = false;
    scheduler.config.time_step = 15;
    scheduler.config.event_duration = 60;
    scheduler.templates.event_header = (start, end) => {
      const toTimeString = date => date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      const text = `${toTimeString(start)} - ${toTimeString(end)}`;
      return `<div class=${styles['event-header']} title="${text}">${text}</div>`
    };
    scheduler.templates.event_text = (_, _2, event) => {
      return `<div title="${event.text}">${event.text}</div>`;
    };

    scheduler.init(schedulerContainer.current);

    // close lightbox when user clicks outside of box
    const clickListener = e => {
      if (e.target.className === 'dhx_cal_cover') {
        scheduler.endLightbox(false);
      }
    };
    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);

    // purposefully not listing dependencies above since the prop "readOnly" is not meant to be changed
    // (we don't want to initialize the dhtmlx scheduler twice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // purposefully not listing dependencies above since the prop "readOnly" is not meant to be changed
  // (we don't want to initialize the dhtmlx scheduler twice)

  useEffect(() => scheduler.locale.labels.new_event = eventTextPlaceholder, [eventTextPlaceholder]);

  useEffect(() => {
    const callback = () => {
      let [startOffset, endOffset] = [0, 0];
      if (window.innerWidth < 500) {
        endOffset = 1;
      } else if (window.innerWidth < 768) {
        endOffset = 3;
      } else if (window.innerWidth < 900) {
        endOffset = 4;
      } else if (window.innerWidth < 1300) {
        endOffset = 5;
      } else {
        endOffset = 8;
      }

      setWeekStartOffset(() => startOffset);
      setWeekEndOffset(() => endOffset);
      return true;
    };
    callback();

    const listenerId = scheduler.attachEvent('onSchedulerResize', callback);
    return () => scheduler.detachEvent(listenerId);
  }, []);

  useEffect(() => {
    scheduler.setCurrentView(startDate);
  }, [startDate]);

  useEffect(() => {
    scheduler.updateView();
  }, [weekStartOffset, weekEndOffset]);

  useEffect(() => {
    scheduler.clearAll();
    scheduler.parse(events);

    const listenerIds = [];
    const eventCallback = () => onChange(scheduler.getEvents());
    listenerIds.push(scheduler.attachEvent("onEventChanged", eventCallback));
    listenerIds.push(scheduler.attachEvent("onEventAdded", eventCallback));
    listenerIds.push(scheduler.attachEvent("onEventDeleted", eventCallback));
    listenerIds.push(scheduler.attachEvent('onLightbox', eventId => {
      const { color = '#3C519C' } = (scheduler.getEvent(eventId) || {});
      scheduler.getLightbox().style.setProperty('--color', color);
    }));
    listenerIds.push(scheduler.attachEvent("onViewChange", (_, newDate) => setCurrentDate(newDate)));
    listenerIds.push(scheduler.attachEvent("onClick", (id, e) => {
      if (!readOnly) {
        scheduler.showLightbox(id);
        return false;
      }
    }));

    return () => {
      listenerIds.forEach(id => scheduler.detachEvent(id));
    };

    // not listing "readOnly" as a dependency, meant to be constant
    // eslint-disable-next-line
  }, [events, onChange]);

  // weekStartOffset and weekEndOffset may be constants or functions, so this helper function 
  const getValue = (potentialFunction, ...args) =>
    (typeof potentialFunction === 'function') ? potentialFunction(...args) : potentialFunction;
  
  scheduler.date.week_start = date => addDays(date, getValue(weekStartOffset, date));
  scheduler.date.get_week_end = date => addDays(date, getValue(weekEndOffset, date));
  const weekStart = scheduler.date.week_start(currentDate);
  const weekEnd = scheduler.date.get_week_end(currentDate);

  const handleNextClick = () => scheduler.setCurrentView(weekEnd);
  const handlePrevClick = () => scheduler.setCurrentView(addDays(weekStart, -dayDifference(weekStart, weekEnd)));

  return (
    <div className={clsx(styles.scheduler, readOnly && 'read-only')} ref={schedulerContainer}>
      <div className="dhx_cal_navline">
        <a className={styles['logo-container']} href={logoLink}><img src={logo} alt="" /></a>

        <div className={styles['date-range']}>
          {weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          &nbsp;&ndash;&nbsp;
          {addDays(weekEnd, -1).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>

        <div className={clsx(styles['nav-button'], styles.prev)} onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={clsx(styles['nav-button'], styles.next)} onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="dhx_cal_header" />
      <div className="dhx_cal_data" />   
    </div>
  );
};

export default Scheduler;