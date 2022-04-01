import 'dotenv/config'
import bcrypt from 'bcrypt'
import { logger } from './logger'

const saltRounds = 10 // 10 es el valor recomendado

// pongamos unas cadenas que representen dos passwords
const passwordEnTextoPlano = 'p4$$w0rD'
const otroPasswordEnTextoPlano = '0tR0p4$$w0rD'

// generamos un hash para "password"
const generaHash = async (password, saltRounds) => {
    try {
        logger.debug(`bcrypt.hash: ${await bcrypt.hash(password, saltRounds)}`)
    } catch (error) {
        logger.error(error)
    }
}
generaHash(passwordEnTextoPlano, saltRounds)

// comparamos el password con un hash previamente generado
const comparaHash = (password, hash) => {

    try {
        logger.debug(`bcrypt.compare: ${await bcrypt.compare(password, hash)}`)
    } catch (error) {
        logger.error(error)
    }

}
// ejecutamos pruebas de nuestra funcion con hashes obtenidos en la consola
// con esta cadena se generó el hash
comparaHash(passwordEnTextoPlano, '$2b$10$0GoJMTUcYIsW7SOEm6rF6uyLO/oeWWQPxvRa9WYL8RXuqY4Ag8PZm')
// con esta cadena NO se generó el hash
comparaHash(otroPasswordEnTextoPlano, '$2b$10$0GoJMTUcYIsW7SOEm6rF6uyLO/oeWWQPxvRa9WYL8RXuqY4Ag8PZm')
