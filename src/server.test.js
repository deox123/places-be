import { server } from './server';
import axios from 'axios';
import request from 'supertest';
import mockPlaceResponse from './mock/mockPlaceResponse.json';

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn(() =>
    Promise.resolve({
      data: mockPlaceResponse,
    })
  ),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('/place-info', () => {
  it('should respond the GET method with placeId query param', (done) => {
    request(server)
      .get('/place-info?placeId=mockPlaceId')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('should fire http request to fetch place info', (done) => {
    request(server)
      .get('/place-info?placeId=mockPlaceId')
      .then(() => {
        expect(axios.get).toBeCalledTimes(1);
        done();
      });
  });

  it('should respond with status 500 if http request fails', (done) => {
    axios.get.mockImplementationOnce(() => Promise.reject());

    request(server)
      .get('/place-info?placeId=mockPlaceId')
      .then((response) => {
        expect(response.statusCode).toBe(500);

        done();
      });
  });

  it('should respond with info message if query param not provided', (done) => {
    request(server)
      .get('/place-info')
      .then((response) => {
        expect(response.text).toBeTruthy();
        done();
      });
  });
});
