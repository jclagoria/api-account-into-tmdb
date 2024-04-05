import convict from 'convict'

const configTmdb = convict({
    MODE_ENV: {
        doc: "The application environment",
        format: ['production', 'development', 'test'],
        default: "development",
        env: "MODE_ENV"
    },
    PORT: {
        doc: "The port to bind",
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    CACHE_TIME_OUT: {
      doc: "Cache life time element.",
      default: 3000,
      env: "CACHE_TIME_OUT"
    },
    TMDB: {
        BASE_URL: {
            doc: 'TMDB API base URL',
            format: '*',
            default: 'http://api.themoviedb.org/3',
            env: 'TMBD_BASE_URL'
        },
        ACCESS_TOKEN: {
            doc: 'TMDB API access token.',
            format: String,
            default: '',
            env: 'ACCESS_TOKEN'
        }
    },
    CIRCUIT: {
        TIMEOUT: {
            doc: 'CircuitBreaker Option Timeout',
            default: 5000,
            env: 'TIMEOUT'
        },
        ERROR_PERCENTAGE: {
            doc: 'CircuitBreaker Option Error Percentage',
            default: 70,
            env: 'ERROR_PERCENTAGE'
        },
        REQUEST_TIMEOUT: {
            doc: 'CircuitBreaker Option Request Timeout',
            default: 50000,
            env: 'REQUEST_TIMEOUT'
        }
    }

})

configTmdb.loadFile('./src/resources/config.json')

configTmdb.validate({allowed: 'strict'})

export default configTmdb
