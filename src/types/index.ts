export interface Place {
  displayed_what: string;
  displayed_where: string;
  opening_hours: OpeningHours;
}
export interface OpeningHours {
  days: Days;
  closed_on_holidays: boolean;
  open_by_arrangement: boolean;
}
export interface Days {
  monday?: Day[] | null;
  tuesday?: Day[] | null;
  wednesday?: Day[] | null;
  thursday?: Day[] | null;
  friday?: Day[] | null;
}
export interface Day {
  start: string;
  end: string;
  type: 'Open' | 'Closed';
}
