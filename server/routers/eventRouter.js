const Router = require('express')
const router = new Router()
const userController = require('../controllers/eventsController')

router.post('/event', userController.create)
router.get('/', userController.getAll)

module.exports = router