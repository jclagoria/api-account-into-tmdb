import {NextFunction, Request, Response, Router} from 'express'
import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {fetchData} from '../../../application/services/TmdbService'
import {FavoriteMedia} from '../../../domain/models/FavoriteMedia'
import {ListTMDB} from '../../../domain/models/ListTMDB'

export const favoritesTMDB = Router()

favoritesTMDB.get('/:accountId/favorites/movies', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const languageValue = req.query.language
        const numberPage = req.query.page
        const sortByValue = req.query.sort_by

        const paramKey = {
            action: 'favorite-movies',
            language: languageValue,
            pageNumber: numberPage,
            sort: sortByValue
        }

        const keyCache = generateKey({url:`/${accountId}/favorites/movies`, params:  paramKey})
        const urlParam = `/account/${accountId}/favorite/movies?language=${languageValue}&page=${numberPage}&sort_by=${sortByValue}`
        const favoritesMovies = await fetchData<FavoriteMedia>(keyCache, urlParam)

        res.status(200).json(favoritesMovies)
    } catch (error) {
        next(error)
    }
})

favoritesTMDB.get('/:accountId/favorites/tv', validateAccountID, validatePageNumber, async (req: Request, res: Response, next:NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const languageValue = req.query.language
        const sortByValue = req.query.sort_by

        const urlParam = `/account/${accountId}/favorite/tv?language=${languageValue}&page=${numberPage}&sort_by=${sortByValue}`
        const paramKey = {
            action: 'favorite-tv',
            language: languageValue,
            pageNumber: numberPage,
            sort: sortByValue
        }

        const keyCache = generateKey({url: `/account/${accountId}/favorite/tv`, params: paramKey})

        const responseFavoriteTv = await fetchData(keyCache, urlParam)

        res.status(200).json(responseFavoriteTv)
    } catch (error) {
        next(error)
    }
})

favoritesTMDB.get('/:accountId/lists', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page

        const urlParam = `/account/${accountId}/lists?page=${numberPage}`
        const paramKey = {
            action: 'lists',
            numberPage: numberPage
        }
        const keyCache = generateKey({url: `/account/${accountId}/lists`, params: paramKey})

        const responseLists: ListTMDB = await fetchData(keyCache, urlParam)

        res.status(200).json(responseLists)
    } catch (error) {
        next(error)
    }
})
