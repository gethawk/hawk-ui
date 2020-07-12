export const autokey = (func) => {
  let autoKey = 1;

  return (...names) => func(autoKey++, ...names);
};
