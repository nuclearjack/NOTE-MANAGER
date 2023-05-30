export const uId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const generatePassword = (length = 8, settings: string[]) => {
  (!length || length < 8) && (length = 8);

  let chars = '';
  let password = '';

  const numbers = '0123456789';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*_-+=';

  settings.includes('numbers') && (chars += numbers);
  settings.includes('uppercase') && (chars += uppercase);
  settings.includes('lowercase') && (chars += lowercase);
  settings.includes('symbols') && (chars += symbols);

  while (length) {
    password += chars[Math.floor(Math.random() * chars.length)];
    length--;
  }

  return password;
};
