import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { logger } from './logger'


// ******************************
// *** Generación de un token ***
// jwt.sign(payload, secretOrPrivateKey, [options])
// ******************************

// la forma mas básica de generar un token
const tokenBasico = jwt.sign({ data: 'token simple' }, process.env.JWT_SECRET)
logger.debug(`[jwt.sign]tokenBasico: ${tokenBasico}`)

// token que expira
const tokenQueExpiraV1 = jwt.sign({
    data: 'token que expira en una hora'
}, process.env.JWT_SECRET, { expiresIn: 60 * 60 }) // 1h
logger.debug(`[jwt.sign]tokenQueExpiraV1: ${tokenQueExpiraV1}`)

// token que expira en notación de horas
const tokenQueExpiraV2 = jwt.sign({
    data: 'token que expira en una hora con notación corta'
}, process.env.JWT_SECRET, { expiresIn: '1h' })
logger.debug(`[jwt.sign]tokenQueExpiraV2: ${tokenQueExpiraV2}`)


// **********************************
// *** Decodificación de un token ***
// jwt.decode(token [, options])
// **********************************

// decodificación de tokens sin validación
const tokenBasicoDecodificado = jwt.decode(tokenBasico)
logger.debug(`[jwt.decode]tokenBasicoDecodificado: ${JSON.stringify(tokenBasicoDecodificado)}`)

const tokenQueExpiraV1Decodificado = jwt.decode(tokenQueExpiraV1)
logger.debug(`[jwt.decode]tokenQueExpiraV1Decodificado: ${JSON.stringify(tokenQueExpiraV1Decodificado)}`)

const tokenQueExpiraV2Decodificado = jwt.decode(tokenQueExpiraV2)
logger.debug(`[jwt.decode]tokenQueExpiraV2Decodificado: ${JSON.stringify(tokenQueExpiraV2Decodificado)}`)


// ********************************
// *** Verificación de un token ***
// jwt.verify(token, secretOrPublicKey, [options, callback])
// ********************************

// verificación con palabra secreta correcta
try {
    const tokenBasicoVerificado = jwt.verify(tokenBasico, process.env.JWT_SECRET)
    logger.debug(`[jwt.verify]tokenBasicoVerificado: ${JSON.stringify(tokenBasicoVerificado)}`)
} catch (error) {
    logger.error(`[jwt.verify]tokenBasicoVerificado: `, error)
}

// verificación con palabra secreta incorrecta
try {
    const tokenBasicoVerificadoConError = jwt.verify(tokenBasico, 'NOT_THE_SECRET_WORD');
    logger.debug(`[jwt.verify]tokenBasicoVerificadoConError: ${JSON.stringify(tokenBasicoVerificadoConError)}`)
} catch (error) {
    logger.error(`[jwt.verify]tokenBasicoVerificadoConError: ${tokenBasico}`, error)
}
