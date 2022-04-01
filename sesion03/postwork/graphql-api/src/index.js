require('dotenv').config()
import { logger } from './logger'

logger.info('GraphQL API')

console.log(process.env.MY_OWN_KEY)