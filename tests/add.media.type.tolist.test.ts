import {server} from '../src'
import {
    addAMovieToWatchList,
    deleteMovieFromFavoritesMovies,
    errorInServiceAddFavoriteMovie, errorInServiceAddWatchlist,
    generateAddFavoriteMovie, removeMovieFromWatchlist
} from "./utilities/RequestData";
import {
    generatedResponseAddMovieToWatchList,
    generateExceptionWhenAddFavoriteMovie, generateExceptionWhenAddWatchList,
    generateMovieInfoToAdd,
    generateMovieInfoToAddUpdate, generateResponseRemoveFromFavorites, generateResponseRemoveFromWatchlist
} from "./utilities/AccounDataFake";
import {api} from "./helpers";

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

    it('Is not possible to add, send incorrect type of media type', async () => {
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
})
