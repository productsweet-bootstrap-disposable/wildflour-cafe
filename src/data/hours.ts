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
