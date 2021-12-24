import dateFormat, { i18n } from 'dateformat';

i18n.monthNames = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Ост',
  'Ноя',
  'Дек',
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const getDate = (dateStr) => {
  const date = new Date(dateStr);
  return dateFormat(date, 'mmm d, yyyy, HH:MM');
};
