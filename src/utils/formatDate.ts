const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDateSuffix = (date: number) => {
  const lastDigit = date % 10;
  if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
};

export const formatDate = (dateToFormat: Date) => {
  const day = dateToFormat.getUTCDay();
  const date = dateToFormat.getUTCDate();
  const month = dateToFormat.getUTCMonth();
  const year = dateToFormat.getUTCFullYear();

  return `${days[day]}, ${months[month]} ${date}${getDateSuffix(date)}, ${year}`;
};

export const formatDateToShort = (dateToFormat: Date) => {
  const date = dateToFormat.getUTCDate();
  const month = dateToFormat.getUTCMonth();
  const year = dateToFormat.getUTCFullYear();
  const today = new Date();
  const isYearSame = today.getUTCFullYear() === year;

  if (isYearSame) {
    return `${months[month]} ${date}${getDateSuffix(date)}`;
  } else {
    return `${month + 1}/${date}/${year}`;
  }
};
