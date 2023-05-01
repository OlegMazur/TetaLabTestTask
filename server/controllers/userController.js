const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/models')

const generateJwt = (id, login) => {
    return jwt.sign(
        { id, login }, process.env.SECRET_KEY, { expiresIn: '24' }
    )
}

class UserController {
    async registration(req, res) {
        return res.status(200).json({ message: '404' })
    }
    async login(req, res) {
        const { login, password } = req.body
        const user = await User.findOne({ were: { login } })
        const isTheSameUser= user.dataValues.login===login
        if (!isTheSameUser) {
             return res.status(404).json({ message: 'user not found' })
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return res.status(401).json({ message: 'password is not correct' })
        }
        let token=null;
        if(comparePassword&&isTheSameUser){
             token = generateJwt(user.id, user.login)
        }
        
        return res.json( token )
    }
}
module.exports = new UserController()