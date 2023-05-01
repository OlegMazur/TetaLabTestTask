require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const { User } = require('./models/models')
const cors = require('cors')
const router = require('./routers/index')
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require('bcrypt');
app.use(cors())
app.use(express.json())
app.use('/api', router)
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    app.listen(PORT, () => console.log(`Server started on port${PORT}`))
    const userPassword = '123456'
    const hashPassword = await bcrypt.hash(userPassword, 5)
    await User.create({ login: "Oleg", password: hashPassword })
  } catch (e) {
    console.log(e)
  }
}


start()