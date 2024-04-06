import {server} from '../src'
// @ts-ignore
import {
    generateFakeDetailsAccount,
} from "./utilities/AccounDataFake";


const {api} = require('./helpers')

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
        const requestError = {
            codeMessage: 'TMDB0001',
            message: 'AccountId is required and must be an integer.'
        }
        const response = await api.get('/api/account/details/fr2233o').expect(400)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(requestError)
    })
})

afterAll(() => {
    server.close()
    api.release
})
