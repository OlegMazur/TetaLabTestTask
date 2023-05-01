const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.get('/registration', userController.registration)
//router.get('/auth',  userController.check)
module.exports = router