import moment from 'moment';

function getWeekDates(year, week) {
  const weekArr = [];
  for (let i = 0; i < 7; i++) {
    weekArr.push(moment().year(year).week(week).startOf('week')
      .add(i, 'days')
      .date());
  }
  return weekArr;
}

export function monthCalendar(year, month) {
  const calendarArr = [];
  const week = moment().year(year).month(month).startOf('month')
    .week();
  for (let i = 0; i < 6; i++) {
    calendarArr.push(getWeekDates(year, week + i));
  }
  return calendarArr;
}
