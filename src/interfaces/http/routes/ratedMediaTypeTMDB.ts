import {validateAccountID, validatePageNumber} from '../middleware/validations'
import {NextFunction, Request, Response, Router} from 'express'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {RatedMovie} from '../../../domain/models/RatedMovie'
import {fetchData} from '../../../application/services/TmdbService'
import {RatedTvEpisodes} from '../../../domain/models/RatedTvEpisodes'

export const ratedMediaTypeTMDB = Router()

ratedMediaTypeTMDB.get('/:accountId/rated/movies', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const language = req.query.language
        const sortBy = req.query.sort_by

        const urlParam = `/account/${accountId}/rated/movies?language=${language}&page=${numberPage}&sort_by=${sortBy}`
        const paramKey = {
            action: 'rated-movies',
            numberPage: numberPage
        }

        const keyCache = generateKey({url: `/account/${accountId}/rated/movies`, params: paramKey})
        const responseList: RatedMovie = await fetchData<RatedMovie>(keyCache, urlParam)

        res.status(200).json(responseList)
    } catch (error) {
        next(error)
    }
})

ratedMediaTypeTMDB.get('/:accountId/rated/tv', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const language = req.query.language
        const sortBy = req.query.sort_by

        const urlParam = `/account/${accountId}/rated/tv?language=${language}&page=${numberPage}&sort_by=${sortBy}`
        const paramKey = {
            action: 'rated_tv',
            numberPage: numberPage
        }

        const keyCache = generateKey({url: `/account/${accountId}/rated/tv`, params: paramKey})
        const responseRatedTv = await fetchData(keyCache, urlParam)

        res.status(200).json(responseRatedTv)
    } catch (error) {
        next(error)
    }
})

ratedMediaTypeTMDB.get('/:accountId/rated/tv/episodes', validateAccountID, validatePageNumber, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const language = req.query.language
        const sortBy = req.query.sort_by

        const urlParam = `/account/${accountId}/rated/tv/episodes?language=${language}&page=${numberPage}&sort_by=${sortBy}`
        const paramKey = {
            action: 'rated_episodes',
            numberPage: numberPage,
            sortBy: sortBy
        }

        const keyCache = generateKey({url: `/account/${accountId}/rates/tv/episodes`, params: paramKey})

        const responseRatedEpisode:RatedTvEpisodes = await fetchData<RatedTvEpisodes>(keyCache, urlParam)

        res.status(200).json(responseRatedEpisode)
    } catch (error) {
        next(error)
    }
})
