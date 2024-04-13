import {Request, Response, NextFunction, Router} from 'express'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {fetchData} from "../../../application/services/TmdbService";
import {WatchListMovieTMDB} from "../../../domain/models/WatchListMovieTMDB";
import {WatchlistTvTMDB} from "../../../domain/models/WatchlistTvTMDB";

export const watchlistMediaTmdb = Router()

watchlistMediaTmdb.get('/:accountId/watchlist/movies', validateAccountID, validatePageNumber,
    async (req: Request, res: Response, next: NextFunction) => {

    await fetchWatchlistMediaType('movies', req, res, next)
})

watchlistMediaTmdb.get('/:accountId/watchlist/tv', validateAccountID, validatePageNumber,
    async (req: Request, res: Response, next: NextFunction) => {

    await fetchWatchlistMediaType('tv', req, res, next)
})

async function fetchWatchlistMediaType(type: 'movies' | 'tv', req: Request, res: Response, next: NextFunction) {
    try {
        const accountId = req.params.accountId
        const pageNumber = req.query.page || 1
        const languageValue = req.query.language || 'en-US'
        const sortByValue = req.query.sort_by || 'created_at.asc'

        const paramKey = {
            action: `favorite-${type}`,
            language: languageValue,
            pageNumber: pageNumber,
            sortBy: sortByValue
        }

        const baseUrl = `/account/${accountId}/watchlist/${type}`
        const keyCache = generateKey({url: baseUrl, params: paramKey})
        const urlParam = `${baseUrl}?language=${languageValue}$page=${pageNumber}$sort_by=${sortByValue}`

        const watchlistResponse = await fetchData(keyCache, urlParam)
        res.status(200).json(watchlistResponse)
    } catch (error) {
        next(error)
    }
}
