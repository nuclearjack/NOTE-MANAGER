export const uId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const sortPosts = (sortValue: number | string) => (a, b) => {
  if (typeof a[sortValue] === 'number') {
    return a[sortValue] - b[sortValue];
  }
  if (typeof a[sortValue] === 'string') {
    return a[sortValue].localeCompare(b[sortValue]);
  }
};
