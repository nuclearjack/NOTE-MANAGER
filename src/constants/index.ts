export const APP_NAME = 'Notes App';

export const LS_NAME = 'password-manager';

export const MIN_PASS_LENGTH = 8;

export const MAX_PASS_LENGTH = 50;

export const POST_ICONS = {
  default: 'mdi-apps',
  login: 'mdi-web',
  note: 'mdi-text',
  card: 'mdi-credit-card-multiple-outline',
  favourite: 'mdi-star',
  trash: 'mdi-delete',
  remove: 'mdi-delete-forever',
};

export const POST_SORT_ITEMS_TYPES = {
  dateCreate: 'Дата создания',
  dateUpdate: 'Дата изменения',
  title: 'Название',
  type: 'Тип элемента',
};

export const POST_SORT_ITEMS_TYPE = {
  dateCreate: 'Дата создания',
  dateUpdate: 'Дата изменения',
  title: 'Название',
};

export const GEN_PASSWORD_OPTIONS = [
  { label: 'Цифры', value: 'numbers' },
  { label: 'Прописные буквы', value: 'uppercase' },
  { label: 'Строчные буквы', value: 'lowercase' },
  { label: 'Символы', value: 'symbols' },
];
