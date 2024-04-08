import {server} from '../src'
// @ts-ignore
import {api} from './helpers';
// @ts-ignore
import {
    generateFakeDetailsAccount,
} from "./utilities/AccounDataFake";
import {responseErrorAccountId} from "./utilities/ErrorTypes";

describe('TMDB API get Account Description tests', () => {
    it('fetches account details successfully', async () => {
        const expectedData = generateFakeDetailsAccount()

        const response = await api
            .get('/api/account/details/10332765')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expectedData)
    })

    it('is not possible the accountId because url is note correct', async () => {
        const response = await api.get('/api/account/details/').expect(404)

        expect(response.status).toBe(404)
    })

    it('Is not possible the accountId is not valid', async () => {
        const requestError = responseErrorAccountId
        const response = await api.get('/api/account/details/fr2233o').expect(400)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(requestError)
    })
})

afterAll(() => {
    server.close()
})
