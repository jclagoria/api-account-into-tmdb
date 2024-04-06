import {NextFunction, Request, Response, Router} from 'express'
import {fetchData} from '../../../application/services/TmdbService'
import {DetailsAccount} from '../../../domain/models/detailsAccount'
import {addMediaIdTOWatchlist, markMovieAsFavorite} from '../../../application/commands/markFavoriteCommandHandler'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'

export const routerTMDB = Router()

routerTMDB.get('/details/:accountId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId

        if (!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        const paramKey = {
            action: 'accountDetails'
        }

        const keyOfCache = generateKey({url: `/account/${accountId}`, params: paramKey})

        const accountDetails: DetailsAccount = await fetchData(keyOfCache, `/account/${accountId}`)

        res.json(accountDetails)
    } catch (error) {
        next(error)
    }
})

routerTMDB.post('/:accountId/favorite', async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const {media_type, media_id, favorite} = req.body
        const accountId = req.params.accountId

        if (!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        const commandResult = await markMovieAsFavorite(accountId,{
            media_type,
            media_id,
            favorite
        })

        res.status(200).json(commandResult);
    } catch (error) {
        next(error)
    }
})

routerTMDB.post('/:accountId/watchlist', async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const {media_type, media_id, watchlist} = req.body
        const accountId = req.params.accountId

        if(!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        const commandResult = await addMediaIdTOWatchlist(accountId, {
            media_type,
            media_id,
            watchlist,
        })

        res.status(200).json(commandResult)
    } catch (error) {
        next(error)
    }
})
