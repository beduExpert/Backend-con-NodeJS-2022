import { ApolloError } from 'apollo-server-errors'
import Live from '../db/model/Live'

export class LiveController {

    async getLives() {
        return await Live.findAll()
    }

    async getLive(id: string) {
        return await Live.findOne({
            where: { id }
        })
    }

    async saveLive(id: string, title: string, subtitle: string, date: string, time: string, mode: string, img: string) {
        return await Live.create({ id, title, subtitle, date, time, mode, img })
    }

    async updateLive(id: string, title: string, subtitle: string, date: string, time: string, mode: string, img: string) {
        const book = await Live.findOne({
            where: { id }
        })
        if (book) {
            await Live.update({ title, subtitle, date, time, mode, img }, {
                where: { id }
            })
            return await Live.findOne({ where: { id } })
        } else {
            throw new ApolloError('Live not found', 'ERR003')
        }
    }

}
