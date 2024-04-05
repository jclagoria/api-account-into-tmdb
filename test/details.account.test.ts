import {server} from '../src'
// @ts-ignore
import {
    generateExceptionWhenAddFavoriteMovie,
    generateFakeDetailsAccount,
    generateMovieInfoToAdd,
    generateMovieInfoToAddUpdate, generateResponseRemoveFromFavorites
} from "./utilities/AccounDataFake";
// @ts-ignore
import {
    deleteMovieFromFavoritesMovies,
    errorInServiceAddFavoriteMovie,
    generateAddFavoriteMovie
} from "./utilities/RequestData";

const {api} = require('./helpers')

describe('TMDB API get Account Description test', () => {
    it('fetches account details successfully', async () => {
        const expectedData = generateFakeDetailsAccount()

        const response = await api
            .get('/api/account/details/10332765')
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expectedData)
    })

    it('is not possible the accountId is not in the url', async () => {
        const response = await api.get('/api/account/details/').expect(404)

        expect(response.status).toBe(404)
    })

    it('is not possible the accountId is not valid', async () => {
        const response = await api.get('/api/account/details/fr2233o').expect(400)

        expect(response.status).toBe(400)
        expect(response.body.error).toEqual('AccountId is required and must be an integer.')
    })
})

describe('TMDB add Movie to favorite list', () => {
    it('Add new Movie to the list', async () => {
        const requestObject = generateAddFavoriteMovie()
        const responseObject = generateMovieInfoToAdd()

        const response = await api.post('/api/account/10332765/favorite')
            .send(requestObject)
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(responseObject)

    })

    it('Send info about a existing movie in the list', async () => {
        const requestObject = generateAddFavoriteMovie()
        const responseObject = generateMovieInfoToAddUpdate()

        const response = await api.post('/api/account/10332765/favorite')
            .send(requestObject)
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(responseObject)

    })

    it('Send info for add, but send incorrect info',async () => {
        const requestObject = errorInServiceAddFavoriteMovie()
        const responseObject = generateExceptionWhenAddFavoriteMovie()

        const response = await api.post('/api/account/10332765/favorite')
            .send(requestObject)
            .expect(404)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(responseObject)
    })

    it('Remove a movie from Favorite Movie', async () => {
        const requestObject = deleteMovieFromFavoritesMovies()
        const responseObject = generateResponseRemoveFromFavorites()

        const response = await api.post('/api/account/10332765/favorite')
            .send(requestObject)
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(responseObject)
    })

});


afterAll(() => {
    server.close()
    api.release
})
