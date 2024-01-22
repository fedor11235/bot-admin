function sortBookingDate(bookingDate) {
  const dates = bookingDate.split('_').map(date => date.split('/')[1]);
  dates.sort((a, b) => {
    const aDay = a.split('.');
    const bDay = b.split('.');
    return aDay[0] - bDay[0];
  }).sort((a, b) => {
    const aMonth = a.split('.');
    const bMonth = b.split('.');
    return aMonth[1] - bMonth[1];
  });
  return dates;
}

// console.log(sortBookingDate("morning/10.4_evening/12.2_morning/9.3"));
