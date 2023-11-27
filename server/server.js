import express from 'express'
import ViteExpress from 'vite-express'
import handleUser from './controller/users.js'
import session from 'express-session'

const app =  express()
const port = 8000
app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
  

app.post('/newUser', handleUser.addUser)
app.post('/loginUser', handleUser.loginUser)
app.get('/sessionCheck', handleUser.sessionCheck)

ViteExpress.listen(app, port, ()=>{console.log('Server live at http://localhost:' + port )})