import axios, {AxiosRequestConfig} from 'axios'
import CircuitBreaker from 'opossum'
import configTmdb from '../config'

const tmdbAPIBaseURL = configTmdb.get('TMDB.BASE_URL')
const TOKEN_ACCESS_SITE = configTmdb.get('TMDB.ACCESS_TOKEN')

const axiosInstance = axios.create({
    baseURL: tmdbAPIBaseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN_ACCESS_SITE}`
    }
})

const breakerOptions = {
    timeout: configTmdb.get('CIRCUIT.TIMEOUT'),
    errorThresholdPercentage: configTmdb.get('CIRCUIT.ERROR_PERCENTAGE'),
    requestTimeout: configTmdb.get('CIRCUIT.REQUEST_TIMEOUT')
}

export async function makeTMDBRequest<T>(options: AxiosRequestConfig): Promise<T> {
    const circuitBreaker = new CircuitBreaker(axiosInstance.request, breakerOptions)
    circuitBreaker.on('open', () => console.warn('TMDB API Circuit Breaker Opened!'))
    circuitBreaker.on('close', () => console.log('TMDB API Circuit Breaker Closed.'))
    circuitBreaker.on('halfOpen', () => console.log('TMDB API Circuit Breaker Half Open.'))
    const response = await circuitBreaker.fire(options)
    return response.data
}
