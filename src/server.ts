import express from 'express';
import cors from 'cors';

import { transformPlaceInfo, fetchPlaceInfo } from './utils';

export const server = express();

server.use(cors());

server.get('/place-info', async function (req, res) {
  const { placeId } = req.query;

  if (typeof placeId === 'string') {
    try {
      const placeInfo = await fetchPlaceInfo(placeId);
      const transformedPlaceInfo = transformPlaceInfo(placeInfo);
      res.json(transformedPlaceInfo);
    } catch {
      res.status(500).send('Places service is down, try later');
    }
  } else {
    res.send(
      'Please provide place id in string format, such as placeId={placeId}'
    );
  }
});
