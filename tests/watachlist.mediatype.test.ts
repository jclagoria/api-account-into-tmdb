// @ts-ignore
import {api} from './helpers';
// @ts-ignore
import {responseErrorAccountId, responseErrorInvalidPage} from "./utilities/ErrorTypes";
import {server} from "../src";
// @ts-ignore
import {responseWatchlistMovies} from "./utilities/WatchlistMediaType";

describe('Fetch Watchlist Movies associated to an specific accountId', () => {
    it('should retrieve a list of movies', async () => {
        const expectedWatchlistObject = responseWatchlistMovies()

        const response = await api.get('/api/account/10332765/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc').expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toEqual(expectedWatchlistObject.page)
        expect(response.body.results.length).toEqual(expectedWatchlistObject.results.length)
        expect(response.body.total_pages).toEqual(expectedWatchlistObject.total_pages)
        expect(response.body.total_results).toEqual(expectedWatchlistObject.total_results)
    })

    it('should manage an incorrect accountId', async () => {
        const expectedObject = responseErrorAccountId

        const response  = await api.get('/api/account/103de7r5/watchlist/movies').expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(expectedObject.codeMessage)
        expect(response.body.message).toEqual(expectedObject.message)
    })

    it('should manage an incorrect page number', async () => {
        const expectedObject = responseErrorInvalidPage

        const response = await api.get('/api/account/10332765/watchlist/movies?page=x').expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(expectedObject.codeMessage)
        expect(response.body.message).toEqual(expectedObject.message)
    })
})

afterAll(() => {
    server.close()
})
