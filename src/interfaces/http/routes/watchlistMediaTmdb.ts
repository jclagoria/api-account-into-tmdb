import {Request, Response, NextFunction, Router} from 'express'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {fetchData} from "../../../application/services/TmdbService";
import {WatchListMovieTMDB} from "../../../domain/models/WatchListMovieTMDB";

export const watchlistMediaTmdb = Router()

watchlistMediaTmdb.get('/:accountId/watchlist/movies', validateAccountID, validatePageNumber,
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId
        const pageNumber = req.query.page
        const language = req.query.language
        const sortBy = req.query.sort_by

        const urlParam = `/account/${accountId}/watchlist/movies?language=${language}&page=${pageNumber}&sort_by=${sortBy}`
        const paramKey = {
            action: 'watchlist-movies',
            pageNumber: pageNumber,
            sortBy: sortBy
        }

        const keyCache = generateKey({url: `/account/${accountId}/watchlist/movies`, params: paramKey})
        const responseWatchlistMovie = await fetchData<WatchListMovieTMDB>(keyCache, urlParam)

        res.status(200).json(responseWatchlistMovie)
    } catch (error) {
        next(error)
    }
})
