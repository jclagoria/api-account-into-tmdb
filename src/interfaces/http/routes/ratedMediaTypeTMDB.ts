import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {NextFunction, Request, Response, Router} from 'express'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {RatedMovie} from '../../../domain/models/RatedMovie'
import {fetchData} from '../../../application/services/TmdbService'
import {RatedTvEpisodes} from '../../../domain/models/RatedTvEpisodes'

export const ratedMediaTypeTMDB = Router()

ratedMediaTypeTMDB.get('/:accountId/rated/movies', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction) => {
   await fetchRatedMedia('movies', 'rated/movies', req, res, next)
})

ratedMediaTypeTMDB.get('/:accountId/rated/tv', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    await fetchRatedMedia('tv', 'rated/tv', req, res, next)
})

ratedMediaTypeTMDB.get('/:accountId/rated/tv/episodes', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    await fetchRatedMedia('tv-episodes', 'rated/tv/episodes', req, res, next)
})

async function fetchRatedMedia(mediaType: string, apiUrl: string, req: Request, res: Response, next: NextFunction) {
    try {
        const accountId = req.params.accountId;
        const numberPage = req.query.page || 'en-US'
        const language = req.query.language || 1
        const sortBy = req.query.sort_by || 'created_at.asc'

        const urlParam = `/account/${accountId}/${apiUrl}?language=${language}&page=${numberPage}&sort_by=${sortBy}`
        const paramKey = {
            action: `rated-${mediaType}`,
            numberPage: numberPage,
            sortBy: sortBy
        };

        const keyCache = generateKey({ url: `/account/${accountId}/${apiUrl}`, params: paramKey })
        const response = await fetchData(keyCache, urlParam)

        res.status(200).json(response)
    } catch (error) {
        next(error);
    }
}
