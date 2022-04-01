import { ApolloError } from 'apollo-server-errors'
import { verify } from 'jsonwebtoken'

export class AuthController {

    verifyToken(token: string): boolean {
        if (!token) throw new ApolloError('missing token')
        const decoded = verify(token, process.env.JWT_SECRET)
        return !!decoded
    }

}