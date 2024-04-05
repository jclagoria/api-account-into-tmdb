import {NextFunction, Request, Response, Router} from 'express'
import {fetchData} from '../../../application/services/TmdbService'
import {DetailsAccount} from '../../../domain/models/detailsAccount'
import {markMovieAsFavorite} from '../../../application/commands/markFavoriteCommandHandler'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'

export const routerTMDB = Router()

/**
 * @swagger
 * /details/{accountId}:
 *   get:
 *     summary: Retrieve account details from TMDB.
 *     description: Fetches account details by account ID from TMDB API.
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         description: Numeric ID of the account to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Account details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetailsAccount'
 *       400:
 *         description: Invalid input, account ID is required and must be an integer.
 *       404:
 *         description: Account not found.
 */

routerTMDB.get('/details/:accountId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId

        if (!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            res.status(400).json({
                error: 'AccountId is required and must be an integer.'
            });
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
            res.status(400).json({
                error: 'AccountId is required and must be an integer.'
            });
        }

        if (isNaN(Number(media_id)) || !Number.isInteger(Number(accountId))) {
            res.status(400).json({
                error: 'Media Id is required and must be a valid number.'
            });
        }

        if(!media_type || !media_id || !favorite) {

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
