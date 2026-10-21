type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

export type YearMonth = `${number}-${Month}`;

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatYearMonth(value: YearMonth): string {
  return monthYearFormatter.format(new Date(`${value}-01T00:00:00Z`));
}
