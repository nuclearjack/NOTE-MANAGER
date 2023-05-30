export const uId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const sortPosts = (sortValue) => (a, b) => {
  if (typeof a[sortValue.value] === 'number') {
    return a[sortValue.value] - b[sortValue.value];
  }
  if (typeof a[sortValue.value] === 'string') {
    return a[sortValue.value].localeCompare(b[sortValue.value]);
  }
};
