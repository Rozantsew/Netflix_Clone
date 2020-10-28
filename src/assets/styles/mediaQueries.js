export const breakpoints = {
  xs: 500,
  sm: 769,
  md: 992,
  lg: 1240,
  xl: 1600,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
