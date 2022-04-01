import { AuthController } from "./controller/AuthAPI"
import { LiveController } from "./controller/LiveController"
import { UserController } from "./controller/UserController"

const liveController = new LiveController()
const userController = new UserController()
const authController = new AuthController()

export const resolvers = {
    Query: {
        getAllLives: (_, __, { token }) => {
            return authController.verifyToken(token)
                && liveController.getLives()
        },
        getLive: (_, { id }, { token }) => {
            return authController.verifyToken(token)
                && liveController.getLive(id)
        }
    },
    Mutation: {
        insertLive: (_, { id, title, subtitle, date, time, mode, img }, { token }) => {
            return authController.verifyToken(token)
                && liveController.saveLive(id, title, subtitle, date, time, mode, img)
        },
        updateLive: (_, { id, title, subtitle, date, time, mode, img }, { token }) => {
            return authController.verifyToken(token)
                && liveController.updateLive(id, title, subtitle, date, time, mode, img)
        },
        signIn: (_, { email, password }) => {
            return userController.getUserToken(email, password)
        },
        signUp: (_, { input: user }) => {
            return userController.saveUser(user)
        }
    }
}
