import {server} from '../src'
// @ts-ignore
import {api} from './helpers';
// @ts-ignore
import {
    responseOfEmptyListOfMovies,
    responseOfEmptyListOfTvs,
    responseOfListOfMedias, responseOfListOfTv
} from "./utilities/favorities.movies.tvs";
import {responseErrorAccountId, responseErrorInvalidPage} from "./utilities/ErrorTypes";

describe('TMDB retrieve the list of movies favorite list', () => {
    it('fetch the list of Movies', async ()=> {
        const responseObjectExpected = responseOfListOfMedias()

        const response = await api
            .get('/api/account/10332765/favorites/movies?language=en-US&page=1&sort_by=created_at.asc')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toBe(1)
        expect(response.body.total_pages).toBe(1)
        expect(response.body.total_results).toBe(5)
        expect(response.body.results.length).toBe(responseObjectExpected.results.length)
    })

    it('Send an accountId with error', async () => {
        const requestError = responseErrorAccountId

        const response = await api.get('/api/account/6tgg5557774/favorites/movies?language=en-US&page=1&sort_by=created_at.asc')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(requestError)
    })

    it('Send a invalid number page', async () => {
        const responseObjectExpected = responseErrorInvalidPage

        const response = await api
            .get('/api/account/10332765/favorites/movies?language=en-US&page=X&sort_by=created_at.asc')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toBe(responseObjectExpected.codeMessage)
        expect(response.body.message).toBe(responseObjectExpected.message)
    })

    it('Send a number page and return a empty object', async () => {
        const responseEmptyObjectExpected = responseOfEmptyListOfMovies()

        const response = await api
            .get('/api/account/10332765/favorites/movies?language=en-US&page=17&sort_by=created_at.asc')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toBe(responseEmptyObjectExpected.page)
        expect(response.body.results.length).toEqual(responseEmptyObjectExpected.results.length)
        expect(response.body.total_pages).toEqual(responseEmptyObjectExpected.total_pages)
        expect(response.body.total_pages).toEqual(responseEmptyObjectExpected.total_pages)
    })

})

describe('TMDB retrieve the list of favorite tv list',  () => {
    it('Fetch the list of Tv shows', async () => {
        const responseObjectExpected = responseOfListOfTv()

        const response = await api
            .get('/api/account/10332765/favorites/tv?language=en-US&page=1&sort_by=created_at.asc')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toEqual(responseObjectExpected.page)
        expect(response.body.results.length).toEqual(responseObjectExpected.results.length)
        expect(response.body.total_pages).toEqual(responseObjectExpected.total_pages)
        expect(response.body.total_results).toEqual(responseObjectExpected.total_results)
    })

    it('Its not possible, send an invalid accountId', async () => {
        const responseExpected = responseErrorAccountId

        const response = await api.get('/api/account/56ehhyd88/favorites/tv')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(responseExpected.codeMessage)
        expect(response.body.message).toEqual(responseExpected.message)
    })

    it('Its not possible, send an invalid page number', async () => {
        const responseExpected = responseErrorInvalidPage

        const response = await api
            .get('/api/account/10332765/favorites/tv?language=en-US&page=1x&sort_by=created_at.asc')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body.codeMessage).toEqual(responseExpected.codeMessage)
        expect(response.body.message).toEqual(responseExpected.message)
    })

    it('Returned a empty list', async () => {
        const responseExpected = responseOfEmptyListOfTvs()

        const response = await api
            .get('/api/account/10332765/favorites/tv?language=en-US&page=10&sort_by=created_at.asc')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body.page).toEqual(responseExpected.page)
        expect(response.body.results.length).toEqual(responseExpected.results.length)
        expect(response.body.total_pages).toEqual(responseExpected.total_pages)
        expect(response.body.total_results).toEqual(responseExpected.total_results)
    })
})

afterAll(() => {
    server.close()
})
