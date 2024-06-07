// themeOptions.ts
const breakpoints = () => ({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

const spacing = (factor: number) => `${0.25 * factor}rem`;

export { breakpoints, spacing };
