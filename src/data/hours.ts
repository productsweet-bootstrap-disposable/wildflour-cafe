export interface DayHours {
  label: string;
  hours: string;
}

/**
 * Standard weekly opening hours.
 * No holiday or special-date overrides — edit these values and redeploy
 * to change what's displayed site-wide.
 */
export const openingHours: DayHours[] = [
  { label: 'Mon–Fri', hours: '7:00am – 3:00pm' },
  { label: 'Sat–Sun', hours: '8:00am – 2:00pm' },
];

/**
 * Returns the DayHours entry that covers a given day-of-week (0 = Sunday .. 6 = Saturday).
 * Defaults to the real "today" when no argument is supplied.
 * Mon–Fri -> openingHours[0], Sat–Sun -> openingHours[1].
 */
export function getTodayHours(date: Date = new Date()): DayHours {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  return isWeekend ? openingHours[1] : openingHours[0];
}
