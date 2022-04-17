import axios from 'axios';
import { Place } from '../types';

export const fetchPlaceInfo = (placeId: string): Promise<Place> =>
  axios
    .get(`https://storage.googleapis.com/coding-session-rest-api/${placeId}`)
    .then((res) => res.data);
