import {NextFunction, Request, Response, Router} from 'express'
import {fetchData} from '../../../application/services/TmdbService'
import {DetailsAccount} from '../../../domain/models/detailsAccount'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {validateAccountID} from '../middleware/validations'

export const routerTMDB = Router()

routerTMDB.get('/details/:accountId', validateAccountID, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId

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
