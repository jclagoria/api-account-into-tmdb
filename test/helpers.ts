import {app} from '../src'
import supertest from 'supertest'

const api = supertest(app)

export {api}
