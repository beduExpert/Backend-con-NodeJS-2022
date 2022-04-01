import { ApolloError } from "apollo-server-errors"
import { sequelize } from "./db"

export const resolvers = {
    Query: {
        getAllLives: async () => await sequelize.models.Live.findAll(),
        getLive: async (_, { id }) => {
            return await sequelize.models.Live.findOne({
                where: { id } // es una notación corta de where: { id: id }
            })
        },
    },
    Mutation: {
        insertLive: async (_, { id, title, subtitle, date, time, mode, img }) => {
            return await sequelize.models.Live.create({ id, title, subtitle, date, time, mode, img })
        },
        updateLive: async (_, { id, title, subtitle, date, time, mode, img }) => {
            // buscamos si existe el live solicitado
            const live = await sequelize.models.Live.findOne({
                where: { id } // es una notación corta de where: { id: id }
            })
            // si existe procedemos a actualizar
            if (live) {
                await sequelize.models.Live.update({ title, subtitle, date, time, mode, img }, {
                    where: { id } // es una notación corta de where: { id: id }
                })
                // regresamos el live reciéntemente actualizado
                return await sequelize.models.Live.findOne({ where: { id } })
            }
            // en caso contrario, lanzamos mensaje y código de error
            else {
                throw new ApolloError('Live not found', 'ERR003')
            }
        },
    }
}