import {NextFunction, Request, Response, Router} from 'express'
import {validateAccountID} from '../middleware/validations'
import {addMediaIdTOWatchlist, markMovieAsFavorite} from '../../../application/commands/markFavoriteCommandHandler'

export const addMediaTypeMDB = Router()

addMediaTypeMDB.post('/:accountId/favorite', validateAccountID, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const {media_type, media_id, favorite} = req.body
        const accountId = req.params.accountId

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

addMediaTypeMDB.post('/:accountId/watchlist', validateAccountID, async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const {media_type, media_id, watchlist} = req.body
        const accountId = req.params.accountId

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
