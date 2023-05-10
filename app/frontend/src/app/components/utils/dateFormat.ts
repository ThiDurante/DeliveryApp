export default function dateFormat(date: string) {
  const dateToFormat = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return dateToFormat.toLocaleDateString(undefined, options)
}