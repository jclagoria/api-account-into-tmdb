import {APICache} from '../../infrastructure/cache/APICache'
import {makeTMDBRequest} from '../../infrastructure/external/tmdbAPI'
import {AxiosRequestConfig} from 'axios'

async function fetchData<T>(cacheKey: string, requestPath: string, requestOptions?: Partial<AxiosRequestConfig>): Promise<T> {
    const apiCache = APICache.getInstance()
    let cachedData: T | undefined = apiCache.get<T>(cacheKey)

    try {
        if(!cachedData) {
            const options: AxiosRequestConfig = {
                method: 'get',
                url: requestPath
            }

            cachedData = await makeTMDBRequest<T>(options)
            apiCache.set(cacheKey, cachedData)
        }

    } catch (error) {
        throw new Error('Failed to fetch data from TMDB API')
    }

    return cachedData
}

export {fetchData}
