import express from 'express'
import dotenv from 'dotenv'
import { connect } from './db.config.js'
import { authRouter } from './routes/auth.js'

dotenv.config()
const PORT = process.env.PORT | 3001
const app = express()

app.use(express.json())
app.use(authRouter)

const db = connect()
db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Running on port ${PORT}`)
})
