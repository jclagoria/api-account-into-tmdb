import {server} from '../src'
// @ts-ignore
import {api} from './helpers';
import {responseErrorAccountId, responseErrorInvalidPage} from "./utilities/ErrorTypes";
// @ts-ignore
import {responseRatedMovies} from "./utilities/RatedMoviesData";

describe('Fetch Rated Movies associated to an specific accountId', () => {
    it('Retrieve a list of Rated Movies', async () => {
        const expectedObject = responseRatedMovies()

        const response = await api
            .get('/api/account/10332765/rated/movies?language=en-US&page=1&sort_by=created_at.asc')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toEqual(expectedObject.page)
        expect(response.body.results.length).toEqual(expectedObject.results.length)
        expect(response.body.total_pages).toEqual(expectedObject.total_pages)
        expect(response.body.total_results).toEqual(expectedObject.total_results)
    })

    it('Its not possible, the accountId is incorrect', async () => {
        const expectedError = responseErrorAccountId

        const response = await api.get('/api/account/103de7r5/rated/movies').expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(expectedError.codeMessage)
        expect(response.body.message).toEqual(expectedError.message)
    })

    it('Its not possible, the page number is incorrect', async () => {
        const expectedError = responseErrorInvalidPage

        const response = await api.get('/api/account/10332765/rated/movies?page=x').expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(expectedError.codeMessage)
        expect(response.body.message).toEqual(expectedError.message)
    })
})

afterAll(() => {
    server.close()
})