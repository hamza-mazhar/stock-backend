const request = require('supertest');
const fs = require('fs').promises;
const app = require('../index');

describe('GET /price', () => {
    it('test if filter data exist by date range', async () => {
        const fromDate = '2024-03-19';
        const toDate = '2024-03-20';

        const response = await request(app)
            .get('/price')
            .query({ ticker: 'AAPL', from: fromDate, to: toDate })
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual([
            { timestamp: '2024-03-20', close: 178.67 },
            { timestamp: '2024-03-19', close: 176.08 },
        ]);
    });

    it('test if ticker is in invalid', async () => {
        const response = await request(app)
            .get('/price')
            .query({ ticker: 'INVALID', from: '2024-03-19', to: '2024-03-20' })
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toEqual({ error: 'Invalid ticker symbol' });
    });

    it('test if notable to read file', async () => {
        // Mocking file read failure
        jest.spyOn(fs, 'readFile').mockRejectedValue(
            new Error('File read error')
        );

        const response = await request(app)
            .get('/price')
            .query({ ticker: 'AAPL', from: '2024-03-19', to: '2024-03-20' })
            .expect('Content-Type', /json/)
            .expect(500);

        expect(response.body).toEqual({ error: 'Internal server error' });
    });
});
