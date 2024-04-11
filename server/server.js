import express from 'express'
import ViteExpress from 'vite-express'
import handleUser from './controller/users.js'
import handleSpells from './controller/spells.js'
import session from 'express-session'
import cors from 'cors'

const app =  express()
const port = 8000
app.use(express.json())
app.use(cors())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

  //Get requests
app.get('/sessionCheck', handleUser.sessionCheck)
app.get('/allSpells', handleSpells.getAllSpells)
app.get('/savedSpells', handleSpells.savedSpells)

  //Post requests
app.post('/newUser', handleUser.addUser)
app.post('/loginUser', handleUser.loginUser)
app.post('/spell', handleSpells.saveSpell)

  //delete
app.delete('/spell/:spell', handleSpells.delete)

ViteExpress.listen(app, port, ()=>{
  // handleSpells.serverGetSpells()
  console.log('Server live at http://localhost:' + port )})