require('dotenv').config() 
const express = require('express')
const sequelize=require('./db')
const models=require('./models/models')
const PORT = process.env.PORT || 5000;
// Підключення до бази даних Postgres через Sequelize
//const sequelize = new Sequelize('postgres://username:password@localhost:5432/database_');




// Синхронізація моделей з базою даних
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Таблиці створено');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Створення сервера Express
const app = express();
const start = async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('Server started on port${PORT}'))
    }catch(e){
        console.log(e)
    }
}

// Маршрут для створення нового користувача
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Маршрут для отримання всіх користувачів
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Маршрут для створення нової події
app.post('/events', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Маршрут для отримання всіх подій
app.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Помилка сервера' });
}
});
start()