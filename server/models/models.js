const sequelize =require('../db')
const {DataTypes}=require('sequelize')
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  login: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
   
  }
});

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    
  },
  description: {
    type: DataTypes.STRING,
    
  },
  date: {
    type: DataTypes.STRING,
    
  }
});
User.hasMany(Event)
Event.belongsTo(User)
