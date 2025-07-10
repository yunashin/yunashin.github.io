const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const formatDate = (dateToFormat: Date) => {
  const day = dateToFormat.getUTCDay();
  const date = dateToFormat.getUTCDate();
  const month = dateToFormat.getUTCMonth();
  const year = dateToFormat.getUTCFullYear();

  return `${days[day]}, ${months[month]} ${date}, ${year}`;
}
