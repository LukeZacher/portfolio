export const contactLimits = {
  name: { max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
} as const;
