const { Event } = require('../models/models')

class EventController {
    async getAll(req, res) {
        const events = await Event.findAll()
        return res.json(events)
    }

    async create(req, res) {
        const { category, description, date } = req.body
        const event = await Event.create({ category, description, date })
        return res.json(event)

    }
}
module.exports = new EventController()