export const percentClasser = (number) => {
  let classString = 'flex-item num';
  if (number == 0) return classString;
  classString = number >= 0 ? `${classString} positive` : `${classString} negative`;
  return classString;
};
