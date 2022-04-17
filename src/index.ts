import express from 'express';

import { transformPlaceInfo, fetchPlaceInfo } from './utils';

const server = express();

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

const port = 4000;

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
