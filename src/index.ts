import express from 'express'
import {routerTMDB} from './interfaces/http/routes/tmdbRoutes'
import compression from 'compression'
import errorHandler from 'errorhandler'
import bodyParser from 'body-parser'
import {errorHandlerApi} from './interfaces/http/middleware/errorHandlerApi'
import {APICache} from './infrastructure/cache/APICache'
import {securityMiddleware} from './interfaces/http/middleware/security'
import configTmdb from './infrastructure/config'
import {setupSwagger} from './docs/swaggerDefinition'
import {healthApiRouter} from './interfaces/http/routes/healthApiRouter'
import {addMediaTypeMDB} from './interfaces/http/routes/addMediaType'
import {favoritesTMDB} from './interfaces/http/routes/favoritesTMDB'
import {ratedMediaTypeTMDB} from "./interfaces/http/routes/ratedMediaTypeTMDB";
import {watchlistMediaTmdb} from "./interfaces/http/routes/watchlistMediaTmdb";

const app = express()
const PORT = configTmdb.get('PORT')

app.use(securityMiddleware)
app.use(compression())
app.use(bodyParser.json())
app.use(errorHandler())

APICache.initialize(configTmdb.get('CACHE_TIME_OUT'));

app.use('/api', healthApiRouter)
app.use('/api/account', routerTMDB)
app.use('/api/account', addMediaTypeMDB)
app.use('/api/account', favoritesTMDB)
app.use('/api/account', ratedMediaTypeTMDB)
app.use('/api/account', watchlistMediaTmdb)

app.use(errorHandlerApi)
setupSwagger(app)
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

export {app, server}
