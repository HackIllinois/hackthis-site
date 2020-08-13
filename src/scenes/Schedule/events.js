/* Example return object:
[
  {
    date: Date(),
    dayOfWeek: "Friday",
    month: "February",
    dayOfMonth: 28,
    events: [ ... ] // all the event objects occuring on this day
  },
  ...
]
*/

export const sortEventsIntoDays = events => {
  // separate events by day into a map like so {"2/28/2019": [], "3/1/2019": [], ...}
  const eventsByDay = new Map();
  events.forEach(event => {
    const dateString = new Date(event.startTime * 1000).toLocaleDateString('en-US');
    if (eventsByDay.has(dateString)) {
      eventsByDay.get(dateString).push(event);
    } else {
      eventsByDay.set(dateString, [event]);
    }
  });

  // convert the map into an array of day objects
  const days = [];
  Array.from(eventsByDay.entries()).forEach(([dateString, events]) => {
    const date = new Date(dateString);
    days.push({
      date,
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
      month: date.toLocaleString('en-US', { month: 'long'}),
      dayOfMonth: date.getDate(),
      events: events.sort((a, b) => {
        if (a.startTime === b.startTime) {
          return a.endTime - b.endTime;
        }
        return a.startTime - b.startTime;
      }),
    });
  });

  // sort the days in order (just using the startTime of the first event on that day to prevent additional calculations)
  days.sort((a, b) => a.events[0].startTime - b.events[0].startTime);

  return days;
}

const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

// Returns a 2d array in following format
// [[{ date: Date, index?: Number  }, ...], ...]
// if index is specified, then that date was part of the dates provided as a parameter
export const getSurroundingWeeks = (startDate, numDays) => {
  if (startDate && numDays >= 1) {
    const weeks = [[]];
    let currentWeek = weeks[0];

    // Add all the days preceding startDate in the week of startDate 
    for (let i = -startDate.getDay(); i < 0; i++) { // -startDate.getDay() effectively gets the offset to the sunday before startDate
      currentWeek.push({
        date: addDays(startDate, i)
      });
    }

    // Add all the days that were specified in the parameters
    for (let i = 0; i < numDays; i++) {
      if (currentWeek.length >= 7) { // when we get to the end of this week, add another week
        currentWeek = [];
        weeks.push(currentWeek);
      }

      currentWeek.push({
        date: addDays(startDate, i),
        index: i, // note that these dates get indices
      });
    }

    // Add remaining days in the week of the last date
    const endDate = currentWeek[currentWeek.length - 1].date;
    for (let i = 1; i < (7 - endDate.getDay()); i++) {
      currentWeek.push({
        date: addDays(endDate, i),
      });
    }

    return weeks;
  }

  return [];
}