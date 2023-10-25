import { parseISO, format } from 'date-fns';
import Check from '@/emojis/check_mark_button.svg';
import Dev from '@/emojis/building_construction.svg';

/**
 * Component to display a date string.
 *
 * @param {string} dateStr - The date string to be displayed.
 * @returns {JSX.Element} - The JSX element representing the date.
 */
export default function Date({ dateStr }) {
  return (
    <small>
      {dateStr === 'dev' ? (
        <>
          <Dev className='w-4 h-4' /> Developing
        </>
      ) : (
        <>
          <Check className='w-4 h-4' />{' '}
          <time dateTime='dateString'>
            {format(parseISO(dateStr), 'LLLL d, yyyy')}
          </time>
        </>
      )}
    </small>
  );
}
// date-fns has i18n support, see docs
