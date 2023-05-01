require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const { User, Event } = require('./models/models')
const cors = require('cors')
const router = require('./routers/index')
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require('bcrypt');
app.use(cors())
app.use(express.json())
app.use('/api', router)
const events = [
  { id: 0, category: 'sports', description: 'Yoga in park', date: '2023-04-28T00:00:00+03:00' },
  { id: 1, category: 'sports', description: 'Yoga in park', date: '2023-05-28T00:00:00+03:00' },
  { id: 2, category: 'family', description: 'Dinner with family', date: '2023-05-18T00:00:00+03:00' },
  { id: 3, category: 'work', description: 'Meeting with teem', date: '2023-05-13T00:00:00+03:00' },
  { id: 4, category: 'study', description: 'All day conference dddddd ddddd', date: '2023-05-11T00:00:00+03:00' },
  { id: 5, category: 'relax', description: 'Birthday party', date: '2023-05-07T00:00:00+03:00' },
  { id: 6, category: 'study', description: 'Marketing events', date: '2023-04-22T00:00:00+02:00' },
]

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port${PORT}`))
    const userPassword = '123456'
    const hashPassword = await bcrypt.hash(userPassword, 5)
    await User.create({ login: "Oleg", password: hashPassword })
    events.forEach(async (item) => {
      await Event.create({ category: item.category, description: item.description, date: item.date })
    })

  } catch (e) {
    console.log(e)
  }
}


start()