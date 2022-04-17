import { Place } from '../types';

export const transformPlaceInfo = ({
  displayed_what,
  displayed_where,
  opening_hours,
}: Place) => ({
  name: displayed_what,
  address: displayed_where,
  opening_hours,
});
