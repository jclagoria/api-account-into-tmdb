import {NextFunction, Request, Response, Router} from 'express'
import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {fetchData} from '../../../application/services/TmdbService'
import {FavoriteMedia} from '../../../domain/models/FavoriteMedia'
import {ListTMDB} from '../../../domain/models/ListTMDB'

export const favoritesTMDB = Router()

favoritesTMDB.get('/:accountId/favorites/movies', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    await fetchFavorites('movies', req, res, next)
})

favoritesTMDB.get('/:accountId/favorites/tv', validateAccountID, validatePageNumber, async (req: Request, res: Response, next:NextFunction)=> {
    await fetchFavorites('tv', req, res, next)
})

async function fetchFavorites(type: 'movies' | 'tv', req: Request, res: Response, next: NextFunction) {
    try {
        const accountId = req.params.accountId
        const languageValue = req.query.language || 'en-US'
        const numberPage = req.query.page || 1
        const sortByValue = req.query.sort_by || 'created_at.asc'

        const paramKey = {
            action: `favorite-${type}`,
            language: languageValue,
            pageNumber: numberPage,
            sort: sortByValue
        }

        const baseUrl = `/account/${accountId}/favorite/${type}`
        const keyCache = generateKey({url: `${baseUrl}`, params: paramKey})
        const urlParam = `${baseUrl}?language=${languageValue}&page=${numberPage}&sort_by=${sortByValue}`

        const favoritesResponse = await fetchData(keyCache, urlParam)
        res.status(200).json(favoritesResponse)
    } catch (error) {
        next(error)
    }
}


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
