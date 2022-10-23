import { Sequelize, Model, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory:')

export const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  profilePic: {
    type: DataTypes.STRING,
  },
})
;(async () => {
  await sequelize.sync({ force: true })
  // Code here
})()
