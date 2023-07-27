import { parseISO, format } from 'date-fns';

export default function Date({ dateStr }) {
  return (
    <small>
      {dateStr === 'null' ? (
        '🏗️ Developing'
      ) : (
        <>
          ✅{' '}
          <time dateTime='dateString'>
            {format(parseISO(dateStr), 'LLLL d, yyyy')}
          </time>
        </>
      )}
    </small>
  );
}
// date-fns has i18n support, see docs
