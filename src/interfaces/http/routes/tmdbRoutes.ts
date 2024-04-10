import {NextFunction, Request, Response, Router} from 'express'
import {fetchData} from '../../../application/services/TmdbService'
import {DetailsAccount} from '../../../domain/models/detailsAccount'
import {addMediaIdTOWatchlist, markMovieAsFavorite} from '../../../application/commands/markFavoriteCommandHandler'
import {generateKey} from '../../../infrastructure/utils/cacheUtilities'
import {FavoriteMedia} from "../../../domain/models/FavoriteMedia";
import {ListTMDB} from "../../../domain/models/ListTMDB";
import {RatedMovie} from "../../../domain/models/RatedMovie";

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

routerTMDB.get('/:accountId/favorites/movies', async (req: Request, res: Response, next: NextFunction)=> {
   try {
       const accountId = req.params.accountId
       const languageValue = req.query.language
       const numberPage = req.query.page
       const sortByValue = req.query.sort_by

       if(!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
           const error = {
               codeMessage: 'TMDB0001',
               message: 'AccountId is required and must be an integer.'
           }
           res.status(400).json(error)
           return
       }

       if(numberPage && isNaN(Number(numberPage)) && !Number.isInteger(Number(numberPage))){
           const error = {
               codeMessage: 'TMDB0002',
               message: '"Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
           }
           res.status(400).json(error)
           return
       }

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

routerTMDB.get('/:accountId/favorites/tv', async (req: Request, res: Response, next:NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const languageValue = req.query.language
        const sortByValue = req.query.sort_by

        if(!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        if(numberPage && isNaN(Number(numberPage)) && !Number.isInteger(Number(numberPage))){
            const error = {
                codeMessage: 'TMDB0002',
                message: '"Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
            }
            res.status(400).json(error)
            return
        }

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

routerTMDB.get('/:accountId/lists', async (req: Request, res: Response, next: NextFunction)=> {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page

        if(!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        if(numberPage && isNaN(Number(numberPage)) && !Number.isInteger(Number(numberPage))){
            const error = {
                codeMessage: 'TMDB0002',
                message: '"Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
            }
            res.status(400).json(error)
            return
        }

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

routerTMDB.get('/:accountId/rated/movies', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accountId = req.params.accountId
        const numberPage = req.query.page
        const language = req.query.language
        const sortBy = req.query.sort_by

        if(!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
            const error = {
                codeMessage: 'TMDB0001',
                message: 'AccountId is required and must be an integer.'
            }
            res.status(400).json(error)
            return
        }

        if(numberPage && isNaN(Number(numberPage)) && !Number.isInteger(Number(numberPage))){
            const error = {
                codeMessage: 'TMDB0002',
                message: '"Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
            }
            res.status(400).json(error)
            return
        }

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
