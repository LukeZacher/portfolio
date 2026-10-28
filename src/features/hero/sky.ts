export type StarSize = "sm" | "md" | "lg";

export type Star = {
  /** Horizontal position, as a percentage of the hero's width */
  x: number;
  /** Vertical position, as a percentage of the hero's height */
  y: number;
  size: StarSize;
  /** Seconds for one pulse from dim to bright */
  duration: number;
  /** Seconds into its pulse the star starts at, so stars don't pulse in sync */
  delay: number;
};

export type ShootingStar = {
  /** Starting position, as percentages of the hero's width and height */
  x: number;
  y: number;
  /** Seconds between streaks */
  interval: number;
  /** Seconds after page load before the first streak */
  delay: number;
};

/** Stars fill the right side of the hero, denser toward the bottom right. */
export const stars: readonly Star[] = [
  { x: 95.9, y: 7.1, size: "sm", duration: 4, delay: 3.9 },
  { x: 87.3, y: 8.7, size: "sm", duration: 3.9, delay: 2.8 },
  { x: 77.7, y: 10.6, size: "sm", duration: 4.1, delay: 6.4 },
  { x: 92.1, y: 11.6, size: "sm", duration: 5.4, delay: 0.1 },
  { x: 83.5, y: 13.3, size: "sm", duration: 6.5, delay: 5 },
  { x: 95.8, y: 14.8, size: "md", duration: 6.9, delay: 4.2 },
  { x: 87.4, y: 15.6, size: "sm", duration: 4, delay: 5.8 },
  { x: 79.4, y: 17.6, size: "sm", duration: 6.6, delay: 1.9 },
  { x: 75.6, y: 19, size: "sm", duration: 4, delay: 3.7 },
  { x: 81.3, y: 25.4, size: "sm", duration: 7.2, delay: 2.1 },
  { x: 70.8, y: 27.1, size: "sm", duration: 4.4, delay: 6.9 },
  { x: 76.9, y: 33.7, size: "md", duration: 6.6, delay: 2.6 },
  { x: 70.5, y: 35.9, size: "sm", duration: 5.6, delay: 5.6 },
  { x: 77.2, y: 40.8, size: "lg", duration: 7.1, delay: 6 },
  { x: 68.4, y: 41.2, size: "sm", duration: 4.5, delay: 6.4 },
  { x: 71.9, y: 43.1, size: "md", duration: 7.2, delay: 6.8 },
  { x: 97.4, y: 43.2, size: "md", duration: 7.1, delay: 6.8 },
  { x: 80.4, y: 48.6, size: "lg", duration: 4.6, delay: 2.8 },
  { x: 75.2, y: 48.7, size: "sm", duration: 4.7, delay: 5.4 },
  { x: 96.3, y: 51, size: "sm", duration: 3.8, delay: 0.3 },
  { x: 78.2, y: 54.8, size: "md", duration: 5, delay: 2.2 },
  { x: 68.6, y: 55.1, size: "sm", duration: 7, delay: 4.8 },
  { x: 87.9, y: 58.2, size: "sm", duration: 4.9, delay: 6.7 },
  { x: 95.6, y: 58.2, size: "md", duration: 6.3, delay: 1.6 },
  { x: 72.5, y: 58.8, size: "md", duration: 3.7, delay: 4.1 },
  { x: 82.9, y: 58.9, size: "sm", duration: 3.8, delay: 0.5 },
  { x: 80, y: 63, size: "sm", duration: 5.3, delay: 7.2 },
  { x: 64, y: 63.4, size: "sm", duration: 6.7, delay: 5.1 },
  { x: 67.7, y: 63.7, size: "md", duration: 5.5, delay: 3.5 },
  { x: 98.2, y: 65.1, size: "md", duration: 5.9, delay: 2 },
  { x: 72.8, y: 65.3, size: "md", duration: 4.4, delay: 3.9 },
  { x: 88.8, y: 65.4, size: "sm", duration: 7.4, delay: 0 },
  { x: 93.5, y: 67.1, size: "sm", duration: 6.9, delay: 5.7 },
  { x: 83.8, y: 67.6, size: "md", duration: 6.8, delay: 6.6 },
  { x: 65.8, y: 73.9, size: "lg", duration: 6.3, delay: 6 },
  { x: 69.7, y: 75.3, size: "md", duration: 3.9, delay: 0.1 },
  { x: 98.3, y: 76.5, size: "sm", duration: 4.3, delay: 3 },
  { x: 86, y: 76.6, size: "md", duration: 4.3, delay: 1.2 },
  { x: 74.4, y: 76.9, size: "md", duration: 6.3, delay: 6 },
  { x: 78.7, y: 77.8, size: "md", duration: 5.2, delay: 2.8 },
  { x: 92.8, y: 78.4, size: "sm", duration: 5.5, delay: 4.8 },
  { x: 62.7, y: 82.2, size: "sm", duration: 6.3, delay: 6.9 },
  { x: 66.4, y: 84, size: "sm", duration: 7, delay: 7.4 },
  { x: 96.3, y: 84.1, size: "sm", duration: 7, delay: 2.3 },
  { x: 74.9, y: 84.6, size: "sm", duration: 5.5, delay: 5.1 },
  { x: 87.3, y: 85.6, size: "lg", duration: 3.7, delay: 4.7 },
  { x: 80.6, y: 85.9, size: "sm", duration: 5.4, delay: 2.6 },
  { x: 93, y: 87.1, size: "sm", duration: 6.5, delay: 5.2 },
  { x: 97.4, y: 90.3, size: "md", duration: 6, delay: 2.8 },
  { x: 67.3, y: 90.4, size: "sm", duration: 4.2, delay: 6.4 },
  { x: 60, y: 90.5, size: "md", duration: 5.8, delay: 1 },
  { x: 78.1, y: 91.2, size: "sm", duration: 6.1, delay: 0.9 },
  { x: 87.6, y: 92.9, size: "sm", duration: 4.6, delay: 1.2 },
  { x: 82.5, y: 94.6, size: "lg", duration: 4.3, delay: 4.7 },
  { x: 72.2, y: 95, size: "md", duration: 6.1, delay: 7.3 },
  { x: 56.6, y: 95.3, size: "sm", duration: 6.3, delay: 5.9 },
  { x: 92.7, y: 96.2, size: "sm", duration: 4.6, delay: 2 },
  { x: 98.4, y: 97.6, size: "md", duration: 6.2, delay: 2.9 },
  { x: 62.1, y: 97.9, size: "sm", duration: 4.1, delay: 1.2 },
  { x: 65.8, y: 98, size: "sm", duration: 7, delay: 1.5 },
];

export const shootingStars: readonly ShootingStar[] = [
  { x: 82, y: 6, interval: 14, delay: 1.4 },
  { x: 96, y: 55, interval: 23, delay: 9 },
];
