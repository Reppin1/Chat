import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { localizationDate } from './localizationDate';

const lastSeen = (date) => {
  const data = localizationDate(date);
  return formatDistanceToNow(data, {locale: ru, includeSeconds: true});
};

export { lastSeen };
