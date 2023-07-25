import { parseISO, format } from 'date-fns';

export default function Date({ dateStr }) {
  const date = parseISO(dateStr);
  return <time dateTime='dateString'>{format(date, 'LLLL d, yyyy')}</time>;
}
// date-fns has i18n support, see docs
