import {server} from '../src'
// @ts-ignore
import {
    generatedResponseAddMovieToWatchList,
    generateExceptionWhenAddFavoriteMovie, generateExceptionWhenAddWatchList,
    generateFakeDetailsAccount,
    generateMovieInfoToAdd,
    generateMovieInfoToAddUpdate, generateResponseRemoveFromFavorites, generateResponseRemoveFromWatchlist
} from "./utilities/AccounDataFake";
// @ts-ignore
import {
    addAMovieToWatchList,
    deleteMovieFromFavoritesMovies,
    errorInServiceAddFavoriteMovie, errorInServiceAddWatchlist,
    generateAddFavoriteMovie, removeMovieFromWatchlist
} from "./utilities/RequestData";
import exp = require("constants");

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

    it('Is not possible to add because accountId is incorrect', async () => {
        const responseError = {
            codeMessage: 'TMDB0001',
            message: 'AccountId is required and must be an integer.'
        }

        const response = await api.post('/api/account/344sde222/favorite')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(responseError)
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

describe('Add a movie to the list of Watchlist ', () => {

    it('Send info for add a movie to the watchlist', async ()=> {
        const requestObject = addAMovieToWatchList()
        const responseObject = generatedResponseAddMovieToWatchList()

        const response = await api.post('/api/account/10332765/watchlist')
            .send(requestObject)
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(responseObject)
    })

    it('Try to add a movie to watchlist but send incorrect accountId', async () => {
        const responseError = {
            codeMessage: 'TMDB0001',
            message: 'AccountId is required and must be an integer.'
        }

        const response = await api.post('/api/account/103X27C5/watchlist')
            .expect(400)

        expect(response.status).toBe(400)
        expect(response.body).toEqual(responseError)
    })

    it('Is not possible ', async () => {
        const requestObject = errorInServiceAddWatchlist()
        const responseObject = generateExceptionWhenAddWatchList()

        const response = await api.post('/api/account/10332765/watchlist')
            .send(requestObject)
            .expect(404)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(responseObject)
    })

    it('Send info for remove a movie for the watchlist', async () => {
        const requestObject = removeMovieFromWatchlist()
        const responseObject = generateResponseRemoveFromWatchlist()

        const response = await api.post('/api/account/10332765/watchlist')
            .send(requestObject)
            .expect(200)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(responseObject)
    })

} )

afterAll(() => {
    server.close()
    api.release
})
